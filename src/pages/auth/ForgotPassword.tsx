import UserLayout from '../../layouts/UserLayout'
import { InputField, SubmitButton } from '../../components/form/Fields'
import '../../styles/form/authform.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { universalAPI } from '../../api/api'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [btnLoading, setButtonLoading] = useState(false)
  const [errorOrSuccess, setErrorOrSuccess] = useState({
    hasError: false,
    hasSuccess: false,
    message: '',
  })
  
  const handleResetEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setButtonLoading(true)

    const { status } = await universalAPI('POST', '/auth/forgot-password', {email: email});

    setButtonLoading(false)

    if(status === 'success'){
      setErrorOrSuccess({
        hasError: false,
        hasSuccess: true,
        message: 'Reset Email sent successfully',
      })
    }else{
      setErrorOrSuccess({
        hasError: true,
        hasSuccess: false,
        message: 'Email is not registered',
      })
    }
  }
  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Send Reset Link</h2>
          <form onSubmit={handleResetEmail}>
            <InputField name="email" text="Your Email" type="email" placeholder="Enter your email address" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
              error={errorOrSuccess}
              success={errorOrSuccess}
            />
            <SubmitButton text="Send Reset Link" isLoading={btnLoading} />
          </form>
          <p><Link to={'/auth/login'}>Got password? Login</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default ForgotPassword