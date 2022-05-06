import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { universalAPI } from "../../api/api"
import {InputField, SubmitButton} from "../../components/form/Fields"
import UserLayout from "../../layouts/UserLayout"
import '../../styles/form/authform.css'

const Login = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState({
    hasError: false,
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(prev => ({...prev, [e.target.name]: e.target.value}))

  const submitHandle = async (e: React.FormEvent) => {
    e.preventDefault()

    if(user.email.match(/^be20[0-9]{2}(s|c)e[0-9]{1,3}@gces.edu.np$/g)){
      const { data, status, message } = await universalAPI('POST', '/auth/login', user)

      if(status === 'success'){
        // TODO: add cookies and redirect as role
        console.log(data);
        
        navigate('/admin/dashboard')
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
        errorType: 'email',
        message: 'Use the Bese email!!!',
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
              placeholder="Use the BESE email"
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