/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import ProfileFAB from '../../components/user/ProfileFAB'
import '../../styles/user/style.css'
import '../../styles/user/detail.css'
import { useEffect, useState } from 'react'
import { BookModel } from '../../types/models'
import { universalAPI } from '../../api/api'
import { getUserId, getUserLevel, getUserName } from '../../helper/cookies'

const BookDetail = () => {

    const { bookId } = useParams()
    const navigate = useNavigate()

    const [book, setBook] = useState<BookModel>()

    const fetchBook = async () => {
      const { data, status, message } = await universalAPI('GET', `/books/${bookId}`)
      if(status==='success'){
        setBook(data)
      }else{
        console.error(message);
      }
    }

    useEffect(() => {
      fetchBook()
    }, [])

    const sendRequest = async () => {
      const request = {
        book: {
          bookId: book?._id,
          name: book?.title,
          authorName: book?.author,
          bookType: book?.type,
        },
        user: {
          userId: getUserId(),
          name: getUserName(),
          level: getUserLevel(),
        },
        request_type: 'new request'
      }
      const { status, message } = await universalAPI('POST', '/request', request)

      if(status==='success'){
        navigate('/user/profile')
      }else{
        console.error(message);
      }
    }

    const stayQueue = async () => {
      const queue = {
        bookId: book?._id,
        userId: getUserId(),
        name: getUserName(),
        level: getUserLevel(),
        bookName: book?.title,
      }
      const { status, message } = await universalAPI('POST', '/queue', queue)

      if(status==='success'){
        navigate('/user/profile')
      }else{
        console.error(message);
      }
    }

    const checkQueue = (book: BookModel|undefined) => {
      if(((book?.borrowed_quantity||0)===(book?.quantity||0))||(book?.in_queue.length||0)){
        return true
      }
      // if()

      return false
    }

  return (
    <main>
      <ProfileFAB/>
      <section className="box-section detail-section">
          <div className='back-wrapper'>
              <span onClick={()=>navigate(-1)}>&larr;</span>
          </div>
          <div className='book-detail'>
              <h3>{book?.title}</h3>
              <p><b>Author - </b>{book?.author}</p>
              <p><b>Available copies - {(book?.quantity||0)-(book?.borrowed_quantity||0)}</b></p>
              <p><b>Semester - </b> <i>{book?.category}</i> </p>
              <p><b>Edition - </b><i>{book?.edition}</i></p>
              <p><b>Publisher - </b>{book?.publisher}</p>
              <p><b>Queue -</b> <span className="text-large accent-light">{book?.in_queue.length}</span></p>
              {
                (checkQueue(book))?(
                  <button className="btn btn-accent-two request-btn" onClick={stayQueue}>Stay in Queue</button>
                ):(
                  <button className="btn btn-accent request-btn" onClick={sendRequest}>Send Request</button>
                )
              }
          </div>
      </section>
    </main>
  )
}

export default BookDetail