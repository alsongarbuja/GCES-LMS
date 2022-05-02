import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import Props from '../types/props'
import '../styles/layout/layout.css'

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
        <AdminHeader />
        <div className='flex flex-start'>
            <Sidebar />
            <div className="main">
              {children}
            </div>
        </div>
    </>
  )
}

export default AdminLayout