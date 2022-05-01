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
          <p>Already have account? Login</p>
          <p>Forgot Password?</p>
        </div>
      </main>
    </UserLayout>
  )
}

export default Register