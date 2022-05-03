import TableLayout from "../../layouts/crud/TableLayout"

const Borrows = () => {
  return (
    <main>
        <h2>Borrows</h2>
        <TableLayout theads={['SN', 'Book name', 'Name', 'Due date', 'Book Id', 'Queue']} >
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Artificial Intelligence</td>
                    <td>Alson Garbuja</td>
                    <td>4 days</td>
                    <td>AI-12345</td>
                    <td>None</td>
                    <td className="action-col">
                        <button className="btn btn-success">Check In</button>
                        <button className="btn btn-accent">Extend</button>
                    </td>
                </tr>
            </tbody>
        </TableLayout>
    </main>
  )
}

export default Borrows