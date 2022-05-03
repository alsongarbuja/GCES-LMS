import { Link } from "react-router-dom"
import TableLayout from "../../../layouts/crud/TableLayout"

const UserList = () => {
  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Users</h2>
            <Link to={'add'}><button className="btn btn-success">Create</button></Link>
        </div>
        <TableLayout theads={['SN', 'Name', 'Semester', 'Batch', 'Borrows', 'Fine']} >
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Alson Garbuja</td>
                    <td>6</td>
                    <td>2018</td>
                    <td>4</td>
                    <td>Rs. 120</td>
                    <td className="action-col">
                        <button className="btn btn-danger">Delete</button>
                        <Link to={`show/12345`}><button className="btn btn-dark">Show</button></Link>
                        <Link to={`edit/12345`}><button className="btn btn-accent">Edit</button></Link>
                    </td>
                </tr>
            </tbody>
        </TableLayout>
    </main>
  )
}

export default UserList