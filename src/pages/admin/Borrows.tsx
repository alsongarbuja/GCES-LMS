import moment from "moment"
import { useEffect, useState } from "react"
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
                            <td>{moment(borrow.dueDate).fromNow()}</td>
                            <td>{borrow.uniqueId}</td>
                            <td>None</td>
                            <td className="action-col">
                                <button className="btn btn-success">Check In</button>
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