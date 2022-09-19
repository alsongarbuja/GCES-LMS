import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { universalAPI } from "../../api/api"
import {InputField, SubmitButton} from "../../components/form/Fields"
import { getUserData, setUserData } from "../../helper/cookies"
import UserLayout from "../../layouts/UserLayout"
import '../../styles/form/authform.css'

const Login = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state as { from: any }

  // * state to hold user field infos
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  // * state to hold error
  const [error, setError] = useState({
    hasError: false,
    message: '',
  })

  /**
   * 
   * @param e 
   * @returns 
   */
  // handle changes to input and select
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(prev => ({...prev, [e.target.name]: e.target.value}))

  /**
   * 
   * @param e 
   */
  // handle login authentication
  const submitHandle = async (e: React.FormEvent) => {
    e.preventDefault()

      const { data, status, message } = await universalAPI('POST', '/auth/login', user)

      if(status === 'success'){
        const {user, tokens} = data;
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          batch: user.batch,
          regNo: user.regNo,
          phone: user.phone,
          semester: user.semester,
          faculty: user.faculty,
          accessToken: tokens.access.token,
          role: user.role,
        }
        // add userData to cookies
        setUserData(userData);
        
        // navigate user based on their role
        if(user.role === 'SYSTEM_ADMIN'){
          if(from){
            navigate(from.from?.pathname, { replace: true })
          }else{
            navigate('/admin/dashboard')
          }
        }
        else{
          if(from){
            navigate(from.from?.pathname, { replace: true })
          }else{
            navigate('/user/explore')
          }
        }
        
      }else{
        setError(prev => ({
          ...prev,
          hasError: true,
          message: message,
        }))
      }
  }

  useEffect(() => {
    const user = getUserData()

    if(user){
      if(!from){
        if(user?.role === "SYSTEM_ADMIN") {
          navigate('/admin/dashboard')
        }else{
          navigate('/user/explore')
        }
      }
    }
  // eslint-disable-next-line
  }, [])

  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={submitHandle}>
            <InputField name="email" text="Email" type="email" onChange={handleChange}
              error={{ ...error, message: '' }}
            />
            <InputField name="password" text="Password" type="password" onChange={handleChange}
              error={error}
            />
            <SubmitButton text="Log in" />
          </form>
          <p><Link to={'/auth/register'}>Don't have account? Register</Link></p>
          <p><Link to={'/auth/forgot-password'}>Forgot Password?</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default Login