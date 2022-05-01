import UserLayout from '../../layouts/UserLayout'
import '../../styles/user/style.css'
import '../../styles/user/explore.css'
import { Link } from 'react-router-dom'
import ProfileFAB from '../../components/user/ProfileFAB'

const Explore = () => {
  return (
    <UserLayout>
      <main>
        <ProfileFAB/>
        <section className="box-section search-section">Search</section>
        <section className="box-section textbook-section">
            <div className='section-title flex justify-space-between'>
                <h3><u>Text Books</u></h3>
                <select name="" id="">
                    <option value="first-sem">1st semester</option>
                    <option value="third-sem">3rd semester</option>
                    <option value="fifth-sem">5th semester</option>
                </select>
            </div>
            <div className='book-list'>
                <ul>
                    <li className='flex justify-space-between single-book'>
                        <div>
                            <h4>Computer Networks - 2pcs available</h4>
                            <i>Luther Author</i>
                        </div>
                        <span><Link to={'/user/detail/123abc'}>+</Link></span>
                    </li>
                    <li className='flex justify-space-between single-book'>
                        <div>
                            <h4>Computer Networks - 2pcs available</h4>
                            <i>Luther Author</i>
                        </div>
                        <span>+</span>
                    </li>
                    <li className='flex justify-space-between single-book'>
                        <div>
                            <h4>Computer Networks - 2pcs available</h4>
                            <i>Luther Author</i>
                        </div>
                        <span>+</span>
                    </li>
                </ul>
                <div className='load-wrapper'><button className='btn btn-accent'>Load More</button></div>
            </div>
        </section>
        <section className="box-section referencebook-section">
        <div className='section-title'>
                <h3><u>Reference Books</u></h3>
            </div>
            <div className='book-list'>
                <ul>
                    <li className='flex justify-space-between single-book'>
                        <div>
                            <h4>Computer Networks - 2pcs available</h4>
                            <i>Luther Author</i>
                        </div>
                        <span>+</span>
                    </li>
                    <li className='flex justify-space-between single-book'>
                        <div>
                            <h4>Computer Networks - 2pcs available</h4>
                            <i>Luther Author</i>
                        </div>
                        <span>+</span>
                    </li>
                </ul>
                <div className='load-wrapper'><button className='btn btn-accent'>Load More</button></div>
            </div>
        </section>
      </main>
    </UserLayout>
  )
}

export default Explore