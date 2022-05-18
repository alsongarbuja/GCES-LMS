import '../../styles/admin/setting.css'
import '../../styles/admin/profile.css'
import { useState } from 'react'
import { getUserData } from '../../helper/cookies'

const Profile = () => {
  const [user] = useState(getUserData())

  return (
    <main>
        <h2>Profile</h2>
        <div className='row'>
            <div className="wrapper profile-wrapper">
                <img src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`} alt={`${user.name}`} className='profile-image' />
                <h4>{user.name}</h4>
                <p><i>{user.email}</i></p>
                <p><i>{user.phone}</i></p>
            </div>
            <div className="wrapper">
                <h4>General Information</h4>
                <hr className="hr"/>
                <p className='mt-2'>
                  <b>Connected mail: </b>library@gces.edu.np
                </p>
            </div>
        </div>
    </main>
  )
}

export default Profile