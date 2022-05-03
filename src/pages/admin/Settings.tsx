import '../../styles/admin/setting.css'

const Settings = () => {
  return (
    <main>
        <h2>Settings</h2>
        <div className="row">
            <div className="wrapper">
                <h4>Select your preferred theme</h4>
                <hr className="hr"/>
                <ul className='setting-list'>
                    <li className="flex justify-space-between">
                        <p>Dark mode</p>
                        <span>Toggle</span>
                    </li>
                    <li className="flex justify-space-between">
                        <p>Accent color</p>
                        <div className="accent-selector"></div>
                    </li>
                </ul>
            </div>
            <div className="wrapper">
                <h4>Data</h4>
                <hr className="hr"/>
                <ul className='setting-list'>
                    <li className="flex justify-space-between">
                        <p>Dashboard Cards</p>
                        <select name="" id="">
                            <option value="">Total books</option>
                            <option value="">Total borrow</option>
                            <option value="">Total users</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </main>
  )
}

export default Settings