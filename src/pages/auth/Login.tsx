import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { universalAPI } from "../../api/api"
import {InputField, SubmitButton} from "../../components/form/Fields"
import { setUserData } from "../../helper/cookies"
import UserLayout from "../../layouts/UserLayout"
import '../../styles/form/authform.css'

const Login = () => {

  const navigate = useNavigate()
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

    // check if email is provided by GCES
    if(user.email.match(/^be20[0-9]{2}(s|c)e[0-9]{1,3}@gces.edu.np$/g)){
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
        }
        // add userData to cookies
        setUserData(userData);
        
        // navigate user based on their role
        if(user.role === 'SYSTEM_ADMIN'){
          navigate('/admin/dashboard')
        }
        else{
          navigate('/user/explore')
        }
        
      }else{
        setError(prev => ({
          ...prev,
          hasError: true,
          message: message,
        }))
      }
    }else{
      setError(prev => ({
        ...prev,
        hasError: true,
        message: 'Use the GCES email!!!',
      }))
      setUser(prev => ({...prev, email: ''}))
    }
  }

  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={submitHandle}>
            <InputField name="email" text="Email" type="email" onChange={handleChange}
              error={{ ...error, message: '' }}
              placeholder="Use the GCES email"
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