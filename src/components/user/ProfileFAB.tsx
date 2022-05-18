import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProfileFAB = () => {
  return (
    <Link to={'/user/profile'}>
        <span className='profile-fab box-shadow'>
          <FiUser />
        </span>
    </Link>
  )
}

export default ProfileFAB