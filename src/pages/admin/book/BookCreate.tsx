import React, { useEffect, useState } from 'react';
import { universalAPI } from '../../../api/api';
import { InputField, Select } from '../../../components/form/Fields'
import FormLayout from '../../../layouts/crud/FormLayout'
import { useNotificationContext } from '../../../providers/NotificationProvider';

const bookType = [
    {
        value: 'text-book',
        option: 'Text Book',
    },
    {
        value: 'reference',
        option: 'Reference',
    },
    {
        value: 'others',
        option: 'Others',
    }
];

interface BookObject {
    title: string,
    secondary_title?: string,
    author: string,
    publisher?: string,
    edition?: string,
    quantity: string,
    ISBN_number?: string,
    Barcode_number?: string,
    year: string,
    type: 'text-book' | 'reference' | 'others',
    semester?: string,
    book_copies: string[],
}

const BookCreate = () => {

    const [book, setBook] = useState<BookObject>({
        title: '',
        secondary_title: '',
        author: '',
        publisher: '',
        edition: '',
        quantity: '',
        ISBN_number: '',
        Barcode_number: '',
        year: '',
        type: 'text-book',
        semester: '',
        book_copies: [],
    })
    const [semesters, setSemesters] = useState([])
    const [, setMessages] = useNotificationContext()

    const fetchCategories = async () => {
        const { data, status, message } = await universalAPI('GET', '/semesters')
        if(status === 'success'){
            setSemesters(data.map((c: { _id: string, name: string}) => ({value: c._id, option: c.name})))
        }else{
            console.error(message);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setBook(prev => ({...prev, [e.target.name]: e.target.value}))
    const handleBookCopyChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {       
        let newBookCopies: any[] = []

        for (let j = 0; j < parseInt(book.quantity); j++) {
            if(book.book_copies[j]){
                newBookCopies[j] = book.book_copies[j]
            }
            if(i===j){
                newBookCopies[i] = e.target.value
            }
        }
        
        setBook(prev => ({...prev, book_copies: newBookCopies}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        let toSendBook: BookObject = {
            title: book.title,
            author: book.author,
            quantity: book.quantity,
            year: book.year,
            type: book.type,
            book_copies: book.book_copies,
        }

        if(book.secondary_title!==''){
            toSendBook = {
                ...toSendBook,
                secondary_title: book.secondary_title,
            }
        }
        if(book.publisher!==''){
            toSendBook = {
                ...toSendBook,
                publisher: book.publisher,
            }
        }
        if(book.ISBN_number!==''){
            toSendBook = {
                ...toSendBook,
                ISBN_number: book.ISBN_number,
            }
        }
        if(book.Barcode_number!==''){
            toSendBook = {
                ...toSendBook,
                Barcode_number: book.Barcode_number,
            }
        }
        if(book.edition!==''){
            toSendBook = {
                ...toSendBook,
                edition: book.edition,
            }
        }
        if(book.semester!==''){
            toSendBook ={
                ...toSendBook,
                semester: book.semester,
            }
        }

        const { data, status, message } = await universalAPI('POST', '/books', toSendBook)

        if(status==='success'){
            console.log(data);
            setMessages(prev => [...prev, 'Book created successfully'])
            setBook({
                title: '',
                secondary_title: '',
                author: '',
                publisher: '',
                edition: '',
                quantity: '',
                ISBN_number: '',
                Barcode_number: '',
                year: '',
                type: 'text-book',
                semester: '',
                book_copies: [],
            })
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

  return (
    <FormLayout title="Create Book" submitHandler={handleSubmit}>
        <div className="form-row row">
            <div className="col-6">
                <InputField value={book.title} name="title" text="Book title" onChange={handleChange} />
                <InputField value={book.secondary_title} name="secondary_title" text="Secondary title" onChange={handleChange} required={false} />
                <InputField value={book.author} name="author" text="Author Name" onChange={handleChange} />
                <InputField value={book.publisher} name="publisher" text="Publisher" onChange={handleChange} />
                <InputField value={book.edition} name="edition" text="Edition" type="number" onChange={handleChange} />
                <InputField value={book.quantity} name="quantity" text="Total Copies" type="number" onChange={handleChange} />
            </div>
            <div className="col-6">
                <InputField value={book.ISBN_number} name="ISBN_number" text="ISBN Number" required={false} onChange={handleChange} />
                <InputField value={book.Barcode_number} name="Barcode_number" text="Barcode Number" required={false} onChange={handleChange} />
                <InputField value={book.year} name="year" text="Year" type="number" onChange={handleChange} />
                <Select value={book.type} name="type" text="Type" options={bookType} onChange={handleChange} />
                <Select value={book.semester||''} name="semester" text="Semester" options={semesters} onChange={handleChange} required={!(book.type==='others')} />
                <div className="row m-0">
                    {
                        Array(parseInt(book.quantity)||0).fill(0).map((_, i) => (
                            <InputField 
                                key={i}
                                value={book.book_copies[i]}
                                name="book_copies"
                                text={`Unique ID ${i+1}`}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleBookCopyChange(e, i)}
                                opt="col-6 m-0"
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </FormLayout>
  )
}

export default BookCreate