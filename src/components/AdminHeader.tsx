import { useState } from 'react'
import { FiBell } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/layout/header.css'

const AdminHeader = () => {
  const [drop, setDrop] = useState(false)

  return (
    <header className="flex justify-space-between admin-header">
        <Link to="/">
          <div className="brand flex">
              <span className="logo">
                <img src='/gces-logo.png' alt='gces' className="app-logo" />
              </span>
              <span className="company-name">GCES Library Management System</span>
          </div>
        </Link>
        <div className="utils flex">
            <FiBell className='icons' />
            {/* <div className="profile"></div> */}
            <div
              className="profile"
              style={{ cursor: 'pointer' }}
              onClick={() => setDrop(true)}
            >
              <img 
                src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' 
                alt='profile' 
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    marginRight: '1em',
                }}
              />
            </div>
        </div>
            <div className='profile-drop' style={{ display: drop?'block':'none' }} >
                <div className="links" onClick={() => setDrop(false)}>
                    <Link to="/admin/profile">Your Profile</Link>
                </div>
            </div>
            <div
              className="nav-bg" 
              style={{ display: drop?'block':'none' }}
              onClick={() => setDrop(false)}
            />
    </header>
  )
}

export default AdminHeader