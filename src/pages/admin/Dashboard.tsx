import moment from "moment"
import { useEffect, useState } from "react"
import { FiBook, FiFile, FiUsers } from "react-icons/fi"
import { universalAPI } from "../../api/api"
import DashboardCard from "../../components/admin/DashboardCard"
import TableLayout from "../../layouts/crud/TableLayout"
import { RequestModel } from "../../types/models"

const Dashboard = () => {

  const [requests, setRequests] = useState<RequestModel[]>([])

  const fetchRequests = async () => {
    const { data, status, message } = await universalAPI('GET', '/request')
    if(status==='success'){
      setRequests(data)
    }else{
      console.error(message);
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  const verifyRequest = async (id: string) => {
    if(window.confirm('Accept the request ?')){
      const { data, status, message } = await universalAPI('PATCH', `/request/${id}`, { status: 'verified' })
      if(status==='success'){
        console.log(data);
      }else{
        console.error(message);
      }
    }
  }

  const checkOutRequest = async (id: string) => {
    if(window.confirm('Accept the request ?')){
      const { data, status, message } = await universalAPI('PATCH', `/request/${id}`, { status: 'verified' })
      if(status==='success'){
        console.log(data);
      }else{
        console.error(message);
      }
    }
  }

  const cancelRequest = async (id: string) => {
    const reason = window.prompt('Reason for cancel if any')
    if(reason!==null){
      let cancelObj: any = { status: 'cancelled' }
      if(reason!==''){
        cancelObj = {
          ...cancelObj,
          cancelled_reason: reason,
        }
      }

      const { data, status, message } = await universalAPI('PATCH', `/request/${id}`, cancelObj)
      if(status==='success'){
        console.log(data);
      }else{
        console.error(message);
      }
    }
  }

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
            {
              requests.map((request, i) => (
                <tr key={request._id}>
                  <th>{i+1}</th>
                  <td>{request.user.name}</td>
                  <td>{request.book.name}</td>
                  <td>{moment(request.createdAt).fromNow()}</td>
                  <td className="action-col">
                      {
                        request.status==='open'?(
                          <button className="btn btn-success" onClick={()=>verifyRequest(request._id)}>Accept</button>
                        ):(
                          <button className="btn btn-success" onClick={()=>checkOutRequest(request._id)}>Check Out</button>
                        )
                      }
                      <button className="btn btn-danger" onClick={()=>cancelRequest(request._id)}>Reject</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </TableLayout>
    </main>
  )
}

export default Dashboard