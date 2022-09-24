import UserLayout from '../../layouts/UserLayout'
import { InputField, SubmitButton } from '../../components/form/Fields'
import '../../styles/form/authform.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { universalAPI } from '../../api/api'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  
  const handleResetEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    const { status } = await universalAPI('POST', '/auth/forgot-password', {email: email});

      if(status === 'success'){
        alert('Reset mail has been sent to your email');
      }else{
        alert('Email Not found');
      }
  }
  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Send Reset Link</h2>
          <form onSubmit={handleResetEmail}>
            <InputField name="email" text="Your Email" type="email" placeholder="Enter your email address" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}/>
            <SubmitButton text="Send Reset Link" />
          </form>
          <p><Link to={'/auth/login'}>Got password? Login</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default ForgotPassword