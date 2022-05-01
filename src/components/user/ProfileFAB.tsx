import { Link } from 'react-router-dom'

const ProfileFAB = () => {
  return (
    <Link to={'/user/profile'}>
        <span className='profile-fab box-shadow'>P</span>
    </Link>
  )
}

export default ProfileFAB