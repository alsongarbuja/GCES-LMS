import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { InputField } from "../../../components/form/Fields"
import { deleteObj } from "../../../helper/delete"
import TableLayout from "../../../layouts/crud/TableLayout"
import { UserModel } from "../../../types/models"

const UserList = () => {
    const [users, setUsers] = useState<UserModel[]>([])
    const [filteredUsers, setFilteredUsers] = useState<UserModel[]>([])
    const [name, setName] = useState('')

    const fetchUsers = async () => {
        const { data, status, message } = await universalAPI('GET', '/users?role=USER')
        if(status==='success'){
            setUsers(data.results)
            setFilteredUsers(data.results)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        const pattern = new RegExp(e.target.value, 'i')

        setFilteredUsers(users.filter(u => pattern.test(u.name)))
    }

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Users</h2>
            <div className="flex">
                <Link to={'add'}><button className="btn btn-success mt-2">Create</button></Link>
                <InputField 
                    name="name"
                    text="Student Name"
                    onChange={handleFilter}
                    value={name}
                />
            </div>
        </div>
        <TableLayout theads={['SN', 'Name', 'Semester', 'Batch', 'Borrows', 'Fine']} >
            <tbody>
                {
                    filteredUsers.map((user, i) => (
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