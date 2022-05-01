
const Sidebar = () => {
  return (
    <nav className="sidebar">
        <ul>
            <li>Dashboard</li>
            <li>Borrows</li>
            <li>Books</li>
            <li>Categories</li>
            <li>Limit</li>
            <li>Students</li>
        </ul>
        <ul className="settings">
            <li>Settings</li>
            <li>
                logout
                <br />
                V 1.0
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar