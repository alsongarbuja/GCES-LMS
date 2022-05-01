import { Link } from "react-router-dom"
import {InputField, SubmitButton} from "../../components/form/Fields"
import UserLayout from "../../layouts/UserLayout"
import '../../styles/form/authform.css'

const Login = () => {
  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Login</h2>
          <form>
            <InputField name="username" text="Username" onChange={()=>{}}/>
            <InputField name="password" text="Password" type="password" onChange={()=>{}}/>
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