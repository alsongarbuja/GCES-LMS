import { Link } from 'react-router-dom'
import TableLayout from '../../../layouts/crud/TableLayout'

const BookList = () => {
  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Books</h2>
            <Link to={'add'}><button className="btn btn-success">Create</button></Link>
        </div>
        <TableLayout theads={['SN', 'Name', 'Total Copies', 'Author', 'Available Copies']} >
            <tbody>
                <tr>
                    <th>1</th>
                    <td>OOD</td>
                    <td>4</td>
                    <td>Bidur Devkota</td>
                    <td>2</td>
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

export default BookList