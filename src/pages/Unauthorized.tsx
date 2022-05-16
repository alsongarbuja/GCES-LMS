import { useNavigate } from "react-router-dom"
import "../styles/unauthorized.css"

const Unauthorized = () => {
    const navigate = useNavigate()

  return (
    <div className="unauthorized-section text-center">
        <h1 className="text-danger">You are unauthorized to access this page</h1>
        <button className="btn btn-accent-two" onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Unauthorized