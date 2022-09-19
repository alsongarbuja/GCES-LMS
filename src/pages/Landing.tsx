import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUserData } from "../helper/cookies"
import UserLayout from "../layouts/UserLayout"
import '../styles/landing.css'

const Landing = () => {

    const navigate = useNavigate()
    useEffect(() => {
        const user = getUserData()
    
        if(user){
            if(user?.role === "SYSTEM_ADMIN") {
                navigate('/admin/dashboard')
            }else{
                navigate('/user/explore')
            }
        }
      // eslint-disable-next-line
      }, [])

  return (
    <UserLayout>
        <main className="main-landing">
            <h1>
                <span className="accent-two">
                    GCES
                    <br />
                    Library 
                </span> Management System
            </h1>
            <p>
                <i>
                Web based library management system for Gandaki College of Engineering and Science
                </i>
            </p>
            <div className="auth-btn--holder">
                <Link to="/auth/login"><button className="btn btn-accent btn-auth">LOGIN</button></Link>
                <Link to="/auth/register"><button className="btn btn-border btn-auth">REGISTER</button></Link>
            </div>
        </main>
    </UserLayout>
  )
}

export default Landing