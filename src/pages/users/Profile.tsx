import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import '../../styles/user/style.css'
import '../../styles/user/profile.css'
import { getUserData, removeUserData } from '../../helper/cookies'
import { FiLogOut } from 'react-icons/fi'
// import { universalAPI } from '../../api/api'

const Profile = () => {
    const navigate = useNavigate()
    const [user] = useState(getUserData())
    // const [bookList, setBookList] = useState({})
    // const [isLoading, setIsLoading] = useState(true)
    // const [hasError, setHasError] = useState(false)

    // const getUserBooks = async () => {
    //     const { data, status, message } = await universalAPI('GET', '/user/list')

    //     if(status==='success'){

    //     }else{
    //         setHasError(true)
    //     }

    //     setIsLoading(false)
    // }

    const logout = () => {
        removeUserData()
        navigate('/')
    }

    useEffect(() => {
        
    }, [])

  return (
    <main>
        <section className="box-section profile-box-section general-section">
            <div className='back-wrapper flex justify-space-between'>
                <span onClick={()=>navigate(-1)}>&larr;</span>
                <FiLogOut className="icons" onClick={logout} />
            </div>
            <div className='book-detail'>
                <img src={`https://avatars.dicebear.com/api/big-ears-neutral/${user.name}.svg`} alt={`${user.name}`} />
                <h4>{user.name}</h4>
                <p><i>{user.email}</i></p>
                <p><i>{user.phone}</i></p>
                <p><i>{user.semester} Semester ({user.batch})</i></p>
            </div>
        </section>
        <section className="box-section profile-box-section yourbook-section">
            <div className='section-title'>
                <h3>Your Books</h3>
                <hr className='hr' />
            </div>
            <div className='book-list'>
                <p><u>Textbooks (2)</u></p>
                <ul>
                    <li className='single-books'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b className='accent-light'>(due in 4 days)</b></i>
                    </li>
                    <li className='single-books'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b className='accent-light'>(due in 4 days)</b></i>
                    </li>
                </ul>
                <p><u>Reference books (1)</u></p>
                <ul>
                    <li className='single-books'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b className='accent-light'>(due in 4 days)</b></i>
                    </li>
                </ul>
                <Link to={'/user/explore'}><button className='btn btn-accent btn-full'>Explore Books</button></Link>
            </div>
        </section>
        <section className="box-section profile-box-section requestbook-section">
        <div className='section-title'>
                <h3>Requested Books</h3>
                <hr className="hr" />
            </div>
            <div className='book-list'>
                <p><u>Textbooks (2)</u></p>
                <ul>
                    <li className='single-books'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b>5hrs ago</b><b className='text-success'> (can visit)</b></i>
                    </li>
                    <li className='single-books'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b>1 day ago</b><b className='text-success'> (to be accepted)</b></i>
                    </li>
                </ul>
                <p><u>Reference books (1)</u></p>
                <ul>
                    <li className='single-books'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b>2hrs ago</b><b className='text-success'> (in queue 2)</b></i>
                    </li>
                </ul>
            </div>
        </section>
    </main>
  )
}

export default Profile