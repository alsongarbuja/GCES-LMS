import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { universalAPI } from '../../../api/api'
import { deleteObj } from '../../../helper/delete'
import TableLayout from '../../../layouts/crud/TableLayout'
import { BookModel } from '../../../types/models'

const BookList = () => {

    const [books, setBooks] = useState<BookModel[]>([])

    const fetchBooks = async () => {
        const { data, status, message } = await universalAPI('GET', '/books')

        if(status === 'success'){
            setBooks(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Books</h2>
            <Link to={'add'}><button className="btn btn-success">Create</button></Link>
        </div>
        <TableLayout theads={['SN', 'Name', 'Total Copies', 'Author', 'Available Copies']} >
            <tbody>
                {
                    books.map((book, i) => (
                        <tr key={book._id}>
                            <th>{i+1}</th>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>{book.author}</td>
                            <td>{book.quantity-book.borrowed_quantity}</td>
                            <td className="action-col">
                                <button className="btn btn-danger" onClick={()=>deleteObj('book', `/books/${book._id}`)}>Delete</button>
                                <Link to={`show/${book._id}`}><button className="btn btn-dark">Show</button></Link>
                                <Link to={`edit/${book._id}`}><button className="btn btn-accent">Edit</button></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default BookList