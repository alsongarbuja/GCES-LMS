import { FiLayout, FiBook, FiLayers, FiAlertCircle, FiUsers, FiSliders, FiLogOut, FiBookmark } from 'react-icons/fi'
import '../styles/layout/sidebar.css'

const Sidebar = () => {
  return (
    <nav className="flex justify-space-between sidebar">
        <ul className="sidenav">
            <li>
              <FiLayout className="icons" />
            </li>
            <li>
              <FiBookmark className="icons" />
            </li>
            <li>
              <FiBook className="icons" />
            </li>
            <li>
              <FiLayers className="icons" />
            </li>
            <li>
              <FiAlertCircle className="icons" />
            </li>
            <li>
              <FiUsers className="icons" />
            </li>
        </ul>
        <ul className="settings">
            <li>
              <FiSliders className="icons" />
            </li>
            <li>
              <FiLogOut className="icons" />
              <h5>V 1.0</h5>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar