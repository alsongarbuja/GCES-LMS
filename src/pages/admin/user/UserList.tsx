import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { deleteObj } from "../../../helper/delete"
import TableLayout from "../../../layouts/crud/TableLayout"
import { UserModel } from "../../../types/models"

const UserList = () => {
    const [users, setUsers] = useState<UserModel[]>([])

    const fetchUsers = async () => {
        const { data, status, message } = await universalAPI('GET', '/users')
        if(status==='success'){
            setUsers(data.results)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(users);
    
    
  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Users</h2>
            <Link to={'add'}><button className="btn btn-success">Create</button></Link>
        </div>
        <TableLayout theads={['SN', 'Name', 'Semester', 'Batch', 'Borrows', 'Fine']} >
            <tbody>
                {
                    users.map((user, i) => (
                        <tr key={user.id}>
                            <th>{i+1}</th>
                            <td>{user.name}</td>
                            <td>{user.semester}</td>
                            <td>{user.batch}</td>
                            <td>{user.borrowed_books?.length}</td>
                            <td>Rs. {user.totalFine}</td>
                            <td className="action-col">
                                <button className="btn btn-danger" onClick={()=>deleteObj('user', `/users/${user.id}`)}>Delete</button>
                                <Link to={`show/${user.id}`}><button className="btn btn-dark">Show</button></Link>
                                <Link to={`edit/${user.id}`}><button className="btn btn-accent">Edit</button></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default UserList