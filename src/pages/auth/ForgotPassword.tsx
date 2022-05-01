import UserLayout from '../../layouts/UserLayout'
import { InputField, SubmitButton } from '../../components/form/Fields'
import '../../styles/form/authform.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Send Reset Link</h2>
          <form>
            <InputField name="email" text="Your Email" type="email" placeholder="Enter your email address" onChange={()=>{}}/>
            <SubmitButton text="Send Reset Link" />
          </form>
          <p><Link to={'/auth/login'}>Got password? Login</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default ForgotPassword