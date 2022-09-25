import { useState } from 'react'
import { universalAPI } from '../../api/api'
import Message from '../../components/message'
import '../../styles/admin/setting.css'

const Settings = () => {
    const [openMessage, setOpenMessage] = useState(false)
    const [isActive, setIsActive] = useState(true)
    const [message, setMessage] = useState('')
    const updateSem = async () => {
        if(window.confirm('Are you sure you want to update semester?')){
            const { status, message } = await universalAPI('GET', '/users/update-semester')
            if(status==='success'){
                setOpenMessage(true)
                setMessage('Successfully updated semester')
            }else{
                console.error(message);
            }
        }
    }
    const handleToggle = async () => {
        if(window.confirm('Are you sure you want to toggle fine?')){
            const { status, message } = await universalAPI('PATCH', '/fine/toggle-fine', { isActive: !isActive })
            if(status==='success'){
                setIsActive(prev => !prev)
                setOpenMessage(true)
                setMessage('Successfully toggled fine')
            }
            else{
                console.error(message);
            }
        }
    }
  return (
    <main>
        <h2>Settings</h2>
        <div className="row">
            <div className="wrapper">
                <h4>Settings</h4>
                <hr className="hr"/>
                <ul className='setting-list'>
                    <li className="flex justify-space-between">
                        <p>Connected Mail</p>
                        <span>library@gces.edu.np</span>
                    </li>
                    <li className="flex justify-space-between">
                        <p>Update semesters</p>
                        <button className="btn btn-accent" onClick={updateSem}>Update</button>
                    </li>
                    <li className="flex justify-space-between">
                        <p>Turn on fine calculation</p>
                        <label className="switch">
                            <input type="checkbox" name="isActive" checked={isActive} onChange={handleToggle} />
                            <span className="slider round"></span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        {
            openMessage&&<Message message={message} openMessage={openMessage} type="success" callBack={()=>setOpenMessage(false)} />
        }
    </main>
  )
}

export default Settings