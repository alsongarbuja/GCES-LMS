import UserLayout from '../../layouts/UserLayout'
import '../../styles/user/style.css'
import '../../styles/user/detail.css'
import { useNavigate } from 'react-router-dom'
import ProfileFAB from '../../components/user/ProfileFAB'

const BookDetail = () => {
    const navigate = useNavigate()
  return (
    <UserLayout>
      <main>
        <ProfileFAB/>
        <section className="box-section detail-section">
            <div className='back-wrapper'>
                <span onClick={()=>navigate(-1)}>&larr;</span>
            </div>
            <div className='book-detail'>
                <h3>Computer Networks</h3>
                <p><b>Author - </b>Luther Author</p>
                <p><b>Available copies - 2</b></p>
                <p><b>Semester - </b> <i>6th</i> </p>
                <p><b>Edition - </b><i>2nd</i></p>
                <p><b>Publisher - </b>Sukunda Publication</p>
                <p><b>Popularity - </b> <span className='accent-light'>Teacher's choice</span> </p>
                <button className="btn btn-accent request-btn">Send Request</button>
            </div>
        </section>
      </main>
    </UserLayout>
  )
}

export default BookDetail