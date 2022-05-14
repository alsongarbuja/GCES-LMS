/* eslint-disable array-callback-return */
import moment from "moment"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { universalAPI } from "../../api/api"
import { InputField, Select } from "../../components/form/Fields"
import TableLayout from "../../layouts/crud/TableLayout"
import { BorrowModel, OptionCategoryModel } from "../../types/models"
import '../../styles/admin/borrow.css'

const Borrows = () => {

    const [borrows, setBorrows] = useState<BorrowModel[]>([])
    const [filteredBorrows, setFilteredBorrows] = useState<BorrowModel[]>([])
    const [name, setName] = useState<string>('')
    const [categories, setCategories] = useState<OptionCategoryModel[]>([])
    const [category, setCategory] = useState<string>('all')

    const fetchCategories = async () => {
        const { data, status, message } = await universalAPI('GET', '/category')
        if(status === 'success'){
            const levels = data.map((c: { _id: string, name: string }) => ({ value: c.name, option: c.name }))
            console.log(levels);
            
            setCategories([
                {
                    value: 'all',
                    option: 'All',
                },
                ...levels,
            ])
        }else{
            console.error(message);
        }
    }

    const fetchBorrows = async () => {
        const { data, status, message } = await universalAPI('GET', '/borrow')
        if(status==='success'){
            setBorrows(data)
            setFilteredBorrows(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchCategories()
        fetchBorrows()
    }, [])

    const checkInBook = async (uniqueId: string, userId: string, borrowId: string) => {
        if(window.confirm('Sure book has unique id '+uniqueId)){
            const { status, message } = await universalAPI('DELETE', `/borrow/${borrowId}/${userId}`)

            if(status==='success'){
                window.location.reload()
            }else{
                console.error(message);
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        let bb = borrows;

        if(e.target.name==='name'){
            setName(e.target.value)
            const pattern = new RegExp(e.target.value, "i")

            bb = bb.filter(b => {
                if((pattern.test(b.bookName) || pattern.test(b.userName))&&b.level===category){
                    return b;
                }
                return;
            })
        }else{
            setCategory(e.target.value)
            const pattern = new RegExp(name, "i")

            if(e.target.value==='all'){
                bb = borrows.filter(b => {
                    if(pattern.test(b.bookName) || pattern.test(b.userName)){
                        return b;
                    }
                    return;
                })
            }else{
                bb = borrows.filter(bb => {
                    if((pattern.test(bb.bookName) || pattern.test(bb.userName))&&bb.level===e.target.value){
                        return bb;
                    }
                    return;
                })
            }
        }

        setFilteredBorrows(bb)
    }

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Borrows</h2>
            <div className="filters row m-0">
                <InputField name="name" onChange={handleChange} text="Book/Student" value={name} opt="col-6" />
                <Select name="level" onChange={handleChange} text="Level" value={category} options={categories} opt="col-6" />
            </div>
        </div>
        <TableLayout theads={['SN', 'Book name', 'Name', 'Due date', 'Book Id', 'Queue']} >
            <tbody>
                {
                    filteredBorrows.map((borrow, i) => (
                        <tr key={borrow._id}>
                            <th>{i+1}</th>
                            <td>{borrow.bookName}</td>
                            <td>{borrow.userName}</td>
                            <td>in {moment.duration(moment(borrow.dueDate).diff(moment().startOf('day'))).asDays().toFixed(0)} days</td>
                            <td>{borrow.uniqueId}</td>
                            <td>
                                <span className="accent-light">
                                    <Link to={`/admin/books/show/${borrow.bookId}`}>See queue</Link>
                                </span>
                            </td>
                            <td className="action-col">
                                <button className="btn btn-success" onClick={()=>checkInBook(borrow.uniqueId, borrow.userId, borrow._id)}>Check In</button>
                                <button className="btn btn-accent">Extend</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default Borrows