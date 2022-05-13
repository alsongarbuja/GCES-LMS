import moment from "moment"
import { useEffect, useState } from "react"
import { FiBook, FiFile, FiUsers } from "react-icons/fi"
import { universalAPI } from "../../api/api"
import DashboardCard from "../../components/admin/DashboardCard"
import TableLayout from "../../layouts/crud/TableLayout"
import { DashBoardInfo, RequestModel } from "../../types/models"

const Dashboard = () => {

  const [requests, setRequests] = useState<RequestModel[]>([])
  const [dashInfo, setDashInfo] = useState<DashBoardInfo>()

  const fetchRequests = async () => {
    const { data, status, message } = await universalAPI('GET', '/request')
    if(status==='success'){
      setRequests(data)
    }else{
      console.error(message);
    }
  }
  const fetchDashBoardInfo = async () => {
    const { data, status, message } = await universalAPI('GET', '/admin/dashboard')
    if(status==='success'){
      setDashInfo(data)
    }else{
      console.error(message);
    }
  }

  useEffect(() => {
    fetchRequests()
    fetchDashBoardInfo()
  }, [])

  const verifyRequest = async (id: string) => {
    if(window.confirm('Accept the request ?')){
      const { status, message } = await universalAPI('PATCH', `/request/${id}`, { status: 'verified' })
      if(status==='success'){
        window.location.reload()
      }else{
        console.error(message);
      }
    }
  }

  const checkOutRequest = async (request: RequestModel) => {
    const bookUniqueId = window.prompt('Unique Id of the book')
    if(bookUniqueId!==null){
      const borrowData = {
        bookId: request.book.bookId,
        bookName: request.book.name,
        bookType: request.book.bookType,
        authorName: request.book.authorName,
        uniqueId: bookUniqueId,
      }

      const { status, message } = await universalAPI('POST', `/borrow/${request._id}`, borrowData)
      if(status==='success'){
        window.location.reload()
      }else{
        console.error(message);
      }
    }
  }

  const cancelRequest = async (id: string, book: any) => {
    const reason = window.prompt('Reason for cancel if any')
    if(reason!==null){
      let cancelObj: any = { 
        status: 'cancelled', 
        book: {
          bookId: book.bookId,
          name: book.name,
          authorName: book.authorName,
          bookType: book.bookType,
        }
      }
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
            total={dashInfo?.totalBooks||""}
            title="Total Books"
            icon={<FiBook className="icons" />}
          />
          <DashboardCard
            total={dashInfo?.totalBorrows||""}
            title="Total Borrows"
            icon={<FiFile className="icons" />}
          />
          <DashboardCard
            total={dashInfo?.totalStudents||""}
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
                          <button className="btn btn-success" onClick={()=>checkOutRequest(request)}>Check Out</button>
                        )
                      }
                      <button className="btn btn-danger" onClick={()=>cancelRequest(request._id, request.book)}>{request.status==='open'?'Reject':'Cancel'}</button>
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