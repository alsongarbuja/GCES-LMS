import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { universalAPI } from '../../../api/api'
import { deleteObj } from '../../../helper/delete'
import TableLayout from '../../../layouts/crud/TableLayout'
import { FineModel } from '../../../types/models'

const FineList = () => {

    const [fines, setFines] = useState<FineModel[]>([])

    const fetchFines = async () => {
        const { data, status, message } = await universalAPI('GET', '/fine')

        if(status === 'success'){
            setFines(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchFines()
    }, [])

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Fines</h2>
            {/* <Link to={'add'}><button className="btn btn-success">Create</button></Link> */}
        </div>
        <TableLayout theads={['SN', 'Amount']} >
            <tbody>
                {
                    fines.map((fine, i) => (
                        <tr key={fine._id}>
                            <th>{i+1}</th>
                            <td>{fine.fine}</td>
                            <td className="action-col">
                                <button className="btn btn-danger" onClick={()=>deleteObj('fine', `/fine/${fine._id}`)}>Delete</button>
                                <Link to={`show/${fine._id}`}><button className="btn btn-dark">Show</button></Link>
                                <Link to={`edit/${fine._id}`}><button className="btn btn-accent">Edit</button></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default FineList