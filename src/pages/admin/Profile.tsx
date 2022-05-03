import '../../styles/admin/setting.css'
import '../../styles/admin/profile.css'

const Profile = () => {
  return (
    <main>
        <h2>Profile</h2>
        <div className='row'>
            <div className="wrapper profile-wrapper">
                <img src="https://avatars.dicebear.com/api/big-ears-neutral/shayagya-garbuja-gurung.svg" alt="Shayagya Gurung" className='profile-image' />
                <h4>Shayagya Gurung</h4>
                <p><i>shayagyagurung@gmail.com</i></p>
                <p><i>9825464641</i></p>
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