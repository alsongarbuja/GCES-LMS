import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { deleteObj } from "../../../helper/delete"
import TableLayout from "../../../layouts/crud/TableLayout"
import { LimitModel } from "../../../types/models"

const LimitList = () => {

    const [limits, setLimits] = useState<LimitModel[]>([])

    const fetchLimits = async () => {
        const { data, status, message } = await universalAPI('GET', '/limit')

        if(status === 'success'){
            setLimits(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchLimits()
    }, [])

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Limits</h2>
            <Link to={'add'}><button className="btn btn-success">Create</button></Link>
        </div>
        <TableLayout theads={['SN', 'Limit', 'Level']} >
            <tbody>
                {
                    limits.map((limit, i) => (
                        <tr key={i}>
                            <th>{i+1}</th>
                            <td>{limit.quantity}</td>
                            <td>{limit.level}</td>
                            <td className="action-col">
                                <button className="btn btn-danger" onClick={()=> deleteObj('limit', `/limit/${limit._id}`)}>Delete</button>
                                <Link to={`show/${limit._id}`}><button className="btn btn-dark">Show</button></Link>
                                <Link to={`edit/${limit._id}`}><button className="btn btn-accent">Edit</button></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default LimitList