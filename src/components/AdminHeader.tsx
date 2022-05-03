import { FiBell } from 'react-icons/fi'
import '../styles/layout/header.css'

const AdminHeader = () => {
  return (
    <header className="flex justify-space-between admin-header">
        <div className="brand flex">
            <span className="logo">
              <img src='/gces-logo.png' alt='gces' className="app-logo" />
            </span>
            <span className="company-name">GCES Library Management System</span>
        </div>
        <div className="utils flex">
            <FiBell className='icons' />
            <div className="profile"></div>
        </div>
    </header>
  )
}

export default AdminHeader