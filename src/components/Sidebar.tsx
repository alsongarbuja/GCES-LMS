import { Link, useLocation } from 'react-router-dom'
import { sidemenus, utilmenus } from '../utils/sidebar'
import '../styles/layout/sidebar.css'

const Sidebar = () => {

  const { pathname } = useLocation()
  
  return (
    <nav className="flex justify-space-between sidebar">
        <ul className="sidenav">
          {
            sidemenus.map(menu => (
              <li key={menu.id}>
                <Link to={menu.route} className={`${pathname===menu.route?'active-sidemenu':''}`}>
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
                <Link to={utilmenu.route} className={`${pathname===utilmenu.route?'active-sidemenu':''}`}>
                  {utilmenu.icon}
                </Link>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}

export default Sidebar