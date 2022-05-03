import { Link } from "react-router-dom"
import TableLayout from "../../../layouts/crud/TableLayout"

const CategoryList = () => {
  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Categories</h2>
            <Link to={'add'}><button className="btn btn-success">Create</button></Link>
        </div>
        <TableLayout theads={['SN', 'Name']} >
            <tbody>
                <tr>
                    <th>1</th>
                    <td>5th Semester</td>
                    <td className="action-col">
                        <button className="btn btn-danger">Delete</button>
                        <Link to={`edit/12345`}><button className="btn btn-accent">Edit</button></Link>
                    </td>
                </tr>
            </tbody>
        </TableLayout>
    </main>
  )
}

export default CategoryList