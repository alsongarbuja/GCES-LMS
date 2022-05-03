import { FiMoon } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/layout/header.css'
const UserHeader = () => {
  return (
    <header className="flex justify-space-between">
        <Link to="/">
          <div className="brand flex">
              <span className="logo">
                <img src='/gces-logo.png' alt='gces' className="app-logo" />
              </span>
              <span className="company-name">GLMS</span>
          </div>
        </Link>
        <span className="mode">
          <FiMoon className="icons" />
        </span>
    </header>
  )
}

export default UserHeader