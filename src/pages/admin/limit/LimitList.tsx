import { Link } from "react-router-dom"
import TableLayout from "../../../layouts/crud/TableLayout"

const LimitList = () => {
  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Limits</h2>
            <Link to={'add'}><button className="btn btn-success">Create</button></Link>
        </div>
        <TableLayout theads={['SN', 'Limit', 'Level']} >
            <tbody>
                <tr>
                    <th>1</th>
                    <td>6</td>
                    <td>Bachelors</td>
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

export default LimitList