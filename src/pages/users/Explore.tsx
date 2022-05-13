import { Link } from 'react-router-dom'
import ProfileFAB from '../../components/user/ProfileFAB'
import '../../styles/user/style.css'
import '../../styles/user/explore.css'
import React, { useEffect, useState } from 'react'
import { BookModel } from '../../types/models'
import { universalAPI } from '../../api/api'
import { InputField, Select } from '../../components/form/Fields'

const Explore = () => {

    const [books, setBooks] = useState<BookModel[]>([])
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [hasSearch, setHasSearch] = useState(false)
    const [category, setCategory] = useState('6th Semester')

    const fetchBooks = async () => {
        const { data, status, message } = await universalAPI('GET', '/books')

        if(status==='success'){
            setBooks(data)
        }else{
            console.error(message);
        }
    }
    const fetchCategories = async () => {
        const { data, status, message } = await universalAPI('GET', '/category')
        if(status==='success'){
            setCategories(data.map((c: { name: string }) => ({ value: c.name, option: c.name })))
        }else{
            console.error(message);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)
    const searchResult = (books: BookModel[]) => {
        let remainingBooks = []
        const pattern = new RegExp("/" + searchTerm + "/", 'i')

        for (let i = 0; i < books.length; i++) {
            if(pattern.test(books[i].title)){
                remainingBooks.push(books[i])
            }
            // if(
            //     books[i].title.match(pattern) || books[i].secondary_title?.match(pattern)
            //     || books[i].author.match(pattern) || books[i].publisher.match(pattern)
            // ){
            //     remainingBooks.push(books[i])
            // }
        }

        return remainingBooks;
    }
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if(searchTerm===''){
            setHasSearch(false)
        }else{
            setHasSearch(true)

        }
    }

    useEffect(() => {
        fetchCategories()
        fetchBooks()
    }, [])

  return (
    <main>
        <ProfileFAB/>
        <section className="box-section search-section">
            <form onClick={handleSearch}>
                <div className="row m-0">
                    <InputField 
                        name="searchTerm"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setSearchTerm(e.target.value); if(e.target.value==='')setHasSearch(false)}}
                        text=""
                        opt="col-11 m-0"
                        placeholder="Search..."
                        value={searchTerm}
                    />
                    <button className='btn btn-accent'>Search</button>
                </div>
            </form>
        </section>
        {
            hasSearch?(
                <section className="box section">
                    <div className='section-title'>
                        <h3><u>Search Result</u></h3>
                    </div>
                    <div className='book-list'>
                        <ul>
                            {
                                searchResult(books)
                                    .map(b => (
                                        <Link to={`/user/detail/${b._id}`} key={b._id}>
                                            <li className='single-book'>
                                                <div className='flex justify-space-between'>
                                                    <h4>{b.title}</h4>
                                                    <p>{b.quantity-b.borrowed_quantity}pcs available</p>
                                                </div>
                                                <i>{b.author}</i>
                                            </li>
                                        </Link>
                                    ))
                            }
                        </ul>
                    </div>
                </section>
            ):(
                <>
                    <section className="box-section textbook-section">
                        <div className='section-title flex justify-space-between'>
                            <h3><u>Text Books</u></h3>
                            <Select 
                                name='category'
                                options={categories}
                                text=""
                                value={category}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='book-list'>
                            <ul>
                                {
                                    books.filter(book => (book.type==='text-book'&&book?.category===category))
                                        .map(b => (
                                            <Link to={`/user/detail/${b._id}`} key={b._id}>
                                                <li className='single-book'>
                                                    <div className="flex justify-space-between">
                                                        <h4>{b.title}</h4>
                                                        <p>{b.quantity-b.borrowed_quantity}pcs available</p>
                                                    </div>
                                                    <i>{b.author}</i>
                                                </li>
                                            </Link>
                                        ))
                                }
                            </ul>
                        </div>
                    </section>
                    <section className="box-section referencebook-section">
                        <div className='section-title'>
                            <h3><u>Reference Books</u></h3>
                        </div>
                        <div className='book-list'>
                            <ul>
                                {
                                    books.filter(book => (book.type==='reference'&&book?.category===category))
                                        .map(b => (
                                            <Link to={`/user/detail/${b._id}`} key={b._id}>
                                                <li className='single-book'>
                                                    <div className='flex justify-space-between'>
                                                        <h4>{b.title}</h4>
                                                        <p>{b.quantity-b.borrowed_quantity}pcs available</p>
                                                    </div>
                                                    <i>{b.author}</i>
                                                </li>
                                            </Link>
                                        ))
                                }
                            </ul>
                        </div>
                    </section>
                    <section className="box-section otherbook-section">
                        <div className='section-title'>
                            <h3><u>Other Books</u></h3>
                        </div>
                        <div className='book-list'>
                            <ul>
                                {
                                    books.filter(book => (book.type==='others'))
                                        .map(b => (
                                            <Link to={`/user/detail/${b._id}`} key={b._id}>
                                                <li className='single-book'>
                                                    <div className='flex justify-space-between'>
                                                        <h4>{b.title}</h4>
                                                        <p>{b.quantity-b.borrowed_quantity}pcs available</p>
                                                    </div>
                                                    <i>{b.author}</i>
                                                </li>
                                            </Link>
                                        ))
                                }
                            </ul>
                        </div>  
                    </section>
                </>
            )
        }
    </main>
  )
}

export default Explore