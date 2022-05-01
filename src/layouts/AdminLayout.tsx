import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import Props from '../types/props'

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
        <AdminHeader />
        <div>
            <Sidebar />
            {children}
        </div>
    </>
  )
}

export default AdminLayout