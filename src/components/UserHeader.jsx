import '../styles/layout/header.css'
const UserHeader = () => {
  return (
    <header className="flex justify-space-between">
        <div className="brand">
            <span className="logo">LOGO</span>
            <span className="company-name">GCES Library Management System</span>
        </div>
        <span className="mode">Mode</span>
    </header>
  )
}

export default UserHeader