import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { universalAPI } from '../../../api/api'
import TableLayout from '../../../layouts/crud/TableLayout'
import { LevelModel } from '../../../types/models'

const LevelList = () => {
    const [levels, setLevels] = useState<LevelModel[]>([])

    const fetchLevels = async () => {
        const { data, status, message } = await universalAPI('GET', '/levels')
        if(status === 'success'){
            setLevels(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchLevels()
    }, [])

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Levels</h2>
            {/* <Link to={'add'}><button className="btn btn-success">Create</button></Link> */}
        </div>
        <TableLayout theads={['SN', 'Name', 'Total Limit', 'Fine Amount']} >
            <tbody>
                {   
                    levels.map((level, i) => (
                        <tr key={i}>
                            <th>{i+1}</th>
                            <td>{level.level}</td>
                            <td>{level.limit.filter((limit) => limit.type === 'total')[0].quantity}</td>
                            <td>Rs. {level.fine}</td>
                            <td className="action-col">
                                <Link to={`edit/${level._id}`}><button className="btn btn-accent">Edit</button></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default LevelList