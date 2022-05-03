import { useNavigate } from "react-router-dom"
import '../../styles/layout/crud/show.css'

const ShowLayout = ({ children, title }: {
    children: JSX.Element,
    title: string,
}) => {

    const navigate = useNavigate()

  return (
    <main>
        <h2>{title} Detail</h2>
        <div className="content-section">
            <div className="body">
                {children}
            </div>
            <div className="footer">
                <button className="btn btn-dark" onClick={()=>navigate(-1)}>Go Back</button>
            </div>
        </div>
    </main>
  )
}

export default ShowLayout