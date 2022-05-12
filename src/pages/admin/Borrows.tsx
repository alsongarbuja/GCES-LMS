import moment from "moment"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { universalAPI } from "../../api/api"
import TableLayout from "../../layouts/crud/TableLayout"
import { BorrowModel } from "../../types/models"

const Borrows = () => {

    const [borrows, setBorrows] = useState<BorrowModel[]>([])

    const fetchBorrows = async () => {
        const { data, status, message } = await universalAPI('GET', '/borrow')
        if(status==='success'){
            setBorrows(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
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

  return (
    <main>
        <h2>Borrows</h2>
        <TableLayout theads={['SN', 'Book name', 'Name', 'Due date', 'Book Id', 'Queue']} >
            <tbody>
                {
                    borrows.map((borrow, i) => (
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