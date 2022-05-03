import '../styles/layout/header.css'
const UserHeader = () => {
  return (
    <header className="flex justify-space-between">
        <div className="brand flex">
            <span className="logo">
              <img src='/gces-logo.png' alt='gces' className="app-logo" />
            </span>
            <span className="company-name">GCES Library Management System</span>
        </div>
        <span className="mode">Mode</span>
    </header>
  )
}

export default UserHeader