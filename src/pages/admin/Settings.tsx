import '../../styles/admin/setting.css'

const Settings = () => {
  return (
    <main>
        <h2>Settings</h2>
        <div className="row">
            <div className="wrapper">
                <h4>Mail</h4>
                <hr className="hr"/>
                <ul className='setting-list'>
                    <li className="flex justify-space-between">
                        <p>Connected Mail</p>
                        <span>library@gces.edu.np</span>
                    </li>
                </ul>
            </div>
        </div>
    </main>
  )
}

export default Settings