import { Link, useLocation, useNavigate } from 'react-router-dom'
import { sidemenus, utilmenus } from '../utils/sidebar'
import '../styles/layout/sidebar.css'
import { FiLogOut } from 'react-icons/fi'
import { removeUserData } from '../helper/cookies'

const Sidebar = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const pathArray = pathname.split('/')
  const path = `/${pathArray[1]}/${pathArray[2]}`

  const logout = () => {
    removeUserData()
    navigate('/')
  }

  return (
    <nav className="flex justify-space-between sidebar">
        <ul className="sidenav">
          {
            sidemenus.map(menu => (
              <li key={menu.id}>
                <Link to={menu.route} className={`${path===menu.route?'active-sidemenu':''}`}>
                  {menu.icon}
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="settings">
          {
            utilmenus.map(utilmenu => (
              <li key={utilmenu.id}>
                <Link to={utilmenu.route} className={`${path===utilmenu.route?'active-sidemenu':''}`}>
                  {utilmenu.icon}
                </Link>
              </li>
            ))
          }
          <li>
            <FiLogOut className="icons" onClick={logout} />
          </li>
        </ul>
    </nav>
  )
}

export default Sidebar