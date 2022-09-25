import { useNavigate } from 'react-router-dom'
import '../styles/notfound.css'

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <main className='notfound-main flex justify-space-evenly'>
        <img src="/book.png" alt="page not found illustration" />
        <div>
            <h1>404</h1>
            <p>Page not found</p><br />
            <button className='btn btn-accent-two' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    </main>
  )
}

export default NotFound