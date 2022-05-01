import { Link } from 'react-router-dom'
import { InputField, SubmitButton } from '../../components/form/Fields'
import UserLayout from '../../layouts/UserLayout'
import '../../styles/form/authform.css'

const Register = () => {
  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Register</h2>
          <form>
            <InputField name="email" text="Email" type="email" onChange={()=>{}}/>
            <InputField name="password" text="Password" type="password" onChange={()=>{}}/>
            <InputField name="confirm-password" text="Confirm Password" type="password" onChange={()=>{}}/>
            <SubmitButton text="Register" />
          </form>
          <p><Link to={'/auth/login'}>Already have account? Login</Link></p>
          <p><Link to={'/auth/forgot-password'}>Forgot Password?</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default Register