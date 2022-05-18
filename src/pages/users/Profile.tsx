import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import '../../styles/user/style.css'
import '../../styles/user/profile.css'
import { getUserData, getUserId, removeUserData } from '../../helper/cookies'
import { FiLogOut } from 'react-icons/fi'
import { universalAPI } from '../../api/api'
import moment from 'moment'
import { deleteObj } from '../../helper/delete'
import { InputField } from '../../components/form/Fields'

const Profile = () => {
    const navigate = useNavigate()
    const [user] = useState(getUserData())
    const [bookList, setBookList] = useState<{ borrowed: any[], requested: any[], queues: any[]}>({
        borrowed: [],
        requested: [],
        queues: []
    })
    const [password, setPassword] = useState('')

    const getUserBooks = async () => {
        const { data, status, message } = await universalAPI('GET', `/users/mybooks/${getUserId()}`)

        if(status==='success'){
            setBookList(data)
        }else{
            console.error(message);
        }
    }

    const logout = () => {
        removeUserData()
        navigate('/')
    }

    useEffect(() => {
        getUserBooks()
    }, [])

    const changePassword = async () => {
        if(window.confirm('Change the password?')){
            const { data, status, message } = await universalAPI('PATCH', `/users/${getUserId()}`, { password })
            if(status==='success'){
                window.location.reload()
            }else{
                console.error(message, data);
            }
        }
    }

  return (
    <main>
        <section className="box-section profile-box-section general-section">
            <div className='back-wrapper flex justify-space-between'>
                <span onClick={()=>navigate(-1)}>&larr;</span>
                <FiLogOut className="icons" onClick={logout} />
            </div>
            <div className='book-detail'>
                <img src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`} alt={`${user.name}`} />
                <h4>{user.name}</h4>
                <p><i>{user.email}</i></p>
                <p><i>{user.phone}</i></p>
                <p><i>{user.semester} Semester ({user.batch})</i></p>
            </div>
            <div className="mt-2">
                <InputField opt="m-0" placeholder="New password" name="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} text="" />
                <button className="btn btn-accent-two btn-full" onClick={changePassword}>Change Password</button>
            </div>
        </section>
        <section className="box-section profile-box-section yourbook-section">
            <div className='section-title'>
                <h3>Your Books</h3>
                <hr className='hr' />
            </div>
            <div className='book-list'>
                <p><u>Text books ({bookList.borrowed.filter(b => b.bookType==='text-book').length})</u></p>
                <ul>
                {
                        bookList.borrowed.filter(b => b.bookType==='text-book').map(book => (
                            <li className='single-books' key={Math.random()}>
                                <p><b>{book.bookName}</b> - {book.authorName}</p>
                                <i className='accent-light'>
                                    (  
                                    <b>
                                        due in {moment.duration(moment(book.dueDate).diff(moment().startOf('day'))).asDays().toFixed(0)} days</b>
                                    )
                                </i>
                            </li>
                        ))
                    }
                </ul>
                <p><u>Reference books ({bookList.borrowed.filter(b => b.bookType==='reference').length})</u></p>
                <ul>
                {
                        bookList.borrowed.filter(b => b.bookType==='reference').map(book => (
                            <li className='single-books' key={Math.random()}>
                                <p><b>{book.bookName}</b> - {book.authorName}</p>
                                <i className='accent-light'>
                                    (  
                                    <b>
                                        due in {moment.duration(moment(book.dueDate).diff(moment().startOf('day'))).asDays().toFixed(0)} days</b>
                                    )
                                </i>
                            </li>
                        ))
                    }
                </ul>
                <p><u>Others books ({bookList.borrowed.filter(b => b.bookType==='others').length})</u></p>
                <ul>
                {
                        bookList.borrowed.filter(b => b.bookType==='others').map(book => (
                            <li className='single-books' key={Math.random()}>
                                <p><b>{book.bookName}</b> - {book.authorName}</p>
                                <i className='accent-light'>
                                    (  
                                    <b>
                                        due in {moment.duration(moment(book.dueDate).diff(moment().startOf('day'))).asDays().toFixed(0)} days</b>
                                    )
                                </i>
                            </li>
                        ))
                    }
                </ul>
                <Link to={'/user/explore'}><button className='btn btn-accent btn-full'>Explore Books</button></Link>
            </div>
        </section>
        <section className="box-section profile-box-section requestbook-section">
        <div className='section-title'>
                <h3>Requested Books</h3>
                <hr className="hr" />
            </div>
            <div className='book-list'>
                <p><u>Textbooks ({bookList.requested.filter(b => b.book.bookType==='text-book').length})</u></p>
                <ul>
                    {
                        bookList.requested.filter(b => b.book.bookType==='text-book').map(book => (
                            <li className='single-books' key={Math.random()}>
                                <p><b>{book.book.name}</b> - {book.book.authorName}</p>
                                <i>  
                                    <b>{moment(book.createdAt).fromNow()}</b> - 
                                    <b className={`${book.status==='cancelled'?'text-danger':'text-success'}`}>(
                                        {
                                            book.status==='open'?'to be accepted':
                                                book.status==='verified'?'can visit':'cancelled'
                                        }
                                    )</b>
                                </i>
                                <br />
                                {
                                    book.status==='cancelled'&&(
                                        <button className='btn btn-danger' onClick={()=>deleteObj('request', `/request/${book._id}`)}>Remove</button>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <p><u>Reference books ({bookList.requested.filter(b => b.book.bookType==='reference').length})</u></p>
                <ul>
                    {
                        bookList.requested.filter(b => b.book.bookType==='reference').map(book => (
                            <li className='single-books' key={Math.random()}>
                                <p><b>{book.book.name}</b> - {book.book.authorName}</p>
                                <i>  
                                    <b>{moment(book.createdAt).fromNow()}</b> - 
                                    <b className={`${book.status==='cancelled'?'text-danger':'text-success'}`}>(
                                        {
                                            book.status==='open'?'to be accepted':
                                                book.status==='verified'?'can visit':'cancelled'
                                        }
                                    )</b>
                                </i>
                                <br />
                                {
                                    book.status==='cancelled'&&(
                                        <button className='btn btn-danger' onClick={()=>deleteObj('request', `/request/${book._id}`)}>Remove</button>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <p><u>Other books ({bookList.requested.filter(b => b.book.bookType==='others').length})</u></p>
                <ul>
                    {
                        bookList.requested.filter(b => b.book.bookType==='others').map(book => (
                            <li className='single-books' key={Math.random()}>
                                <p><b>{book.book.name}</b> - {book.book.authorName}</p>
                                <i>  
                                    <b>{moment(book.createdAt).fromNow()}</b> - 
                                    <b className={`${book.status==='cancelled'?'text-danger':'text-success'}`}>(
                                        {
                                            book.status==='open'?'to be accepted':
                                                book.status==='verified'?'can visit':'cancelled'
                                        }
                                    )</b>
                                </i>
                                <br />
                                {
                                    book.status==='cancelled'&&(
                                        <button className='btn btn-danger' onClick={()=>deleteObj('request', `/request/${book._id}`)}>Remove</button>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <p><u>In Queue books ({bookList.queues.length})</u></p>
                <ul>
                    {
                        bookList.queues.map(book => (
                            <li className='single-books' key={Math.random()}>
                                <p>
                                    <b>{book.bookName}</b>                                      
                                    <i>  
                                        <b className='text-success'>
                                            {
                                                book.canVisit?'(Can Visit)':`(queue number - ${book.ticketNumber})`
                                            }
                                        </b>
                                    </i>
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    </main>
  )
}

export default Profile