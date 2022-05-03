import { Link } from 'react-router-dom'
import '../styles/layout/footer.css'
const Footer = () => {
  return (
    <footer>Made By - <Link to="/credit"><b className='accent-light'>2018 Batch</b></Link></footer>
  )
}

export default Footer