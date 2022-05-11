/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { universalAPI } from "../../../api/api";
import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const bookType = [
    {
        value: 'text-book',
        option: 'Text Book',
    },
    {
        value: 'reference',
        option: 'Reference',
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
    category?: string,
    book_copies: any[],
}

const BookEdit = () => {

    const { bookId } = useParams()
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
        category: '',
        book_copies: [],
    })
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        const { data, status, message } = await universalAPI('GET', '/category')
        if(status === 'success'){
            setCategories(data.map((c: { _id: string, name: string}) => ({value: c.name, option: c.name})))
        }else{
            console.error(message);
        }
    }

    const fetchBook = async () => {
        const { data, status, message } = await universalAPI('GET', `/books/${bookId}`)

        if(status==='success'){
            setBook(prev => ({
                ...prev,
                title: data.title,
                author: data.author,
                quantity: data.quantity,
                year: data.year,
                type: data.type,
                category: data.category,
                secondary_title: data?.secondary_title,
                publisher: data?.publisher,
                edition: data?.edition,
                ISBN_number: data?.ISBN_number,
                Barcode_number: data?.Barcode_number,
                book_copies: data.book_copies.map((bc: { bookId: string, in_queue: [] }) => bc.bookId)
            }))
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
            book_copies: book.book_copies.map(bc => ({ bookId: bc })),
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
        if(book.category!==''){
            toSendBook ={
                ...toSendBook,
                category: book.category,
            }
        }

        const { status, message } = await universalAPI('PATCH', `/books/${bookId}`, toSendBook)

        if(status==='success'){
           window.location.reload();
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchCategories()

        fetchBook()
    }, [])

  return (
    <FormLayout title="Edit Book" submitHandler={handleSubmit} isEdit>
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
                <Select value={book.category||'1st semester'} name="category" text="Semester" options={categories} onChange={handleChange} required={!(book.type==='others')} />
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

export default BookEdit