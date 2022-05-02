import { FiBook, FiFile, FiUsers } from "react-icons/fi"
import DashboardCard from "../../components/admin/DashboardCard"
import TableLayout from "../../layouts/crud/TableLayout"

const Dashboard = () => {
  return (
    <main>
        <h2>Dashboard</h2>
        <div className="dashboard-card--holder flex flex-start">
          <DashboardCard
            total="210"
            title="Total Books"
            icon={<FiBook className="icons" />}
          />
          <DashboardCard
            total="102"
            title="Total Borrows"
            icon={<FiFile className="icons" />}
          />
          <DashboardCard
            total="400"
            title="Total Students"
            icon={<FiUsers className="icons" />}
          />
        </div>
        <h2>Requests</h2>
        <TableLayout theads={['SN', 'Name', 'Book', 'Requested Date']}>
          <tbody>
            <tr>
              <th>1</th>
              <td>Alson Garbuja</td>
              <td>Artificial Intelligence</td>
              <td>3 hrs ago</td>
              <td className="action-col">
                  <button className="btn btn-success">Accept</button>
                  <button className="btn btn-danger">Reject</button>
              </td>
            </tr>
            <tr>
                <th>2</th>
                <td>Alson Garbuja</td>
                <td>Artificial Intelligence</td>
                <td>3 hrs ago</td>
                <td className="action-col">
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-danger">Reject</button>
                </td>
            </tr>
            <tr>
                <th>3</th>
                <td>Alson Garbuja</td>
                <td>Artificial Intelligence</td>
                <td>3 hrs ago</td>
                <td className="action-col">
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-danger">Reject</button>
                </td>
            </tr>
            <tr>
                <th>4</th>
                <td>Alson Garbuja</td>
                <td>Artificial Intelligence</td>
                <td>3 hrs ago</td>
                <td className="action-col">
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-danger">Reject</button>
                </td>
            </tr>
          </tbody>
        </TableLayout>
    </main>
  )
}

export default Dashboard