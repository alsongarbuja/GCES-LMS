const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

const getBorrowbyId = async (params) => {
    const { userId, borrowId } = params;
    const user = await User.findById(userId)
    if(!user)
    {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    const borrow = user.borrowed_books.filter( borrowedBook => borrowedBook._id == borrowId)
    if(borrow.length === 0)
    {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Borrow detail not found');
    }
    return borrow;
}
const createBorrow = async (borrowRequest) => {
    const { params, body } = borrowRequest;
    const user = await User.findById(params.userId)
    if(!user)
    {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    // TO DO : Check for Limits
    if(user.borrowed_books.length >= 6)
    {
        throw new ApiError(httpStatus.BAD_REQUEST, 'User limit crossed');
    }
    const borrow = {
        bookId: body.bookId,
        bookName: body.bookName,
        issuedDate: new Date(),
        dueDate: new Date().setDate(new Date().getDate() + 30),
    }
    user.borrowed_books = [...user.borrowed_books, borrow];
    user.save();
    return user;
};

const getBorrows = async () => {
    const users = await User.find({})
    const borrows = [];
    users.forEach(user => {
        borrows.push(...user.borrowed_books)
    })
    borrows.reverse();
    return borrows;
};

const deleteBorrow = async (params) => {
   const { userId, borrowId } = params;
   const user = await User.findById(userId)
   if(!user)
   {
       throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
   }
   await getBorrowbyId(params)
   user.borrowed_books = await user.borrowed_books.filter(borrowedBook => borrowedBook._id != borrowId)
   await user.save();
}

module.exports = {
    getBorrowbyId,
    createBorrow,
    getBorrows,
    deleteBorrow,
}