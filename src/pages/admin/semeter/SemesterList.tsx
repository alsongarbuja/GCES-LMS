import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import TableLayout from "../../../layouts/crud/TableLayout"
import { SemesterModel } from "../../../types/models"

const SemesterList = () => {

    const [semesters, setSemesters] = useState<SemesterModel[]>([])
    const fetchSemesters = async () => {
        const { data, status, message } = await universalAPI('GET', '/semesters')
        if(status === 'success'){
            setSemesters(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchSemesters()
    }, [])

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Semesters</h2>
            {/* <Link to={'add'}><button className="btn btn-success">Create</button></Link> */}
        </div>
        <TableLayout theads={['SN', 'Name', 'Level']} >
            <tbody>
                {   
                    semesters.map((semester, i) => (
                        <tr key={i}>
                            <th>{i+1}</th>
                            <td>{semester.name}</td>
                            <td>{typeof semester.level === 'string' ? semester.level : semester.level?.level}</td>
                            <td className="action-col">
                                <Link to={`edit/${semester._id}`}><button className="btn btn-accent">Edit</button></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default SemesterList