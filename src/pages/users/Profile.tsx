import { Link, useNavigate } from 'react-router-dom'
import UserLayout from '../../layouts/UserLayout'
import '../../styles/user/style.css'
import '../../styles/user/profile.css'

const Profile = () => {
    const navigate = useNavigate()
  return (
    <UserLayout>
      <main>
        <section className="box-section general-section">
        <div className='back-wrapper'>
                <span onClick={()=>navigate(-1)}>&larr;</span>
            </div>
            <div className='book-detail'>
                <img src="https://avatars.dicebear.com/api/big-ears-neutral/salipa-gurung.svg" alt="Salipa Gurung" />
                <h4>Salipa Gurung</h4>
                <p><i>be2018se624@gces.edu.np</i></p>
                <p><i>9824545617</i></p>
                <p><i>6th Semester (2018)</i></p>
            </div>
        </section>
        <section className="box-section yourbook-section">
            <div className='section-title'>
                <h3>Your Books</h3>
                <hr className='hr' />
            </div>
            <div className='book-list'>
                <p><u>Textbooks (2)</u></p>
                <ul>
                    <li className='single-book'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <span className='accent-light'>(due in 4 days)</span></i>
                    </li>
                    <li className='single-book'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <span className='accent-light'>(due in 4 days)</span></i>
                    </li>
                </ul>
                <p><u>Reference books (1)</u></p>
                <ul>
                    <li className='single-book'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <span className='accent-light'>(due in 4 days)</span></i>
                    </li>
                </ul>
                <Link to={'/user/explore'} className='btn btn-accent'>Explore Books</Link>
            </div>
        </section>
        <section className="box-section requestbook-section">
        <div className='section-title'>
                <h3>Requested Books</h3>
                <hr className="hr" />
            </div>
            <div className='book-list'>
                <p><u>Textbooks (2)</u></p>
                <ul>
                    <li className='single-book'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b>5hrs ago</b><span className='text-success'> (can visit)</span></i>
                    </li>
                    <li className='single-book'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b>1 day ago</b><span className='text-success'> (to be accepted)</span></i>
                    </li>
                </ul>
                <p><u>Reference books (1)</u></p>
                <ul>
                    <li className='single-book'>
                        <p><b>Computer Networks</b> (6th sem) - CMP 331</p>
                        <i>Luther Author - <b>2hrs ago</b><span className='text-success'> (in queue 2)</span></i>
                    </li>
                </ul>
            </div>
        </section>
      </main>
    </UserLayout>
  )
}

export default Profile