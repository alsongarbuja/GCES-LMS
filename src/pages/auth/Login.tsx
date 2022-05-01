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
          <p>Forgot Password ?</p>
        </div>
      </main>
    </UserLayout>
  )
}

export default Login