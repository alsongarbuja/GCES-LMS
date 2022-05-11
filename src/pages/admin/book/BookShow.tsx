/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { universalAPI } from '../../../api/api'
import ShowLayout from '../../../layouts/crud/ShowLayout'
import { BookModel } from '../../../types/models'

const BookShow = () => {

    const { bookId } = useParams()
    const [book, setBook] = useState<BookModel>()

    const fetchBook = async () => {
        const { data, status, message } = await universalAPI('GET', `/books/${bookId}`)

        if(status === 'success'){
            setBook(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchBook()
    }, [])

  return (
    <ShowLayout title='Book'>
        <div className='row'>
            <div className='col-6'>
                <p>
                    <b>Title : </b> {book?.title}
                </p>
                <p>
                    <b>Secondary title : </b> {book?.secondary_title || ' - '}
                </p>
                <p>
                    <b>Author : </b> {book?.author}
                </p>
                <p>
                    <b>Publisher : </b> {book?.publisher}
                </p>
                <p>
                    <b>Year : </b> {book?.year || ' - '}
                </p>
                <p>
                    <b>Edition : </b> {book?.edition || ' - '}
                </p>
            </div>
            <div className="col-6">
                <p>
                    <b>ISBN number : </b> {book?.ISBN_number || ' - '}
                </p>
                <p>
                    <b>Barcode number : </b> {book?.Barcode_number || ' - '}
                </p>
                <p>
                    <b>Total Copies : </b> {book?.quantity} [
                        {
                            book?.book_copies.map(copy => `${copy.bookId} , `)
                        }
                    ]
                </p>
                <p>
                    <b>Type : </b> {book?.type}
                </p>
                <>
                    <b>Semeseter : </b> {book?.category || '-'}
                </>
            </div>
        </div>
    </ShowLayout>
  )
}

export default BookShow