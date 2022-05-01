import { Link } from 'react-router-dom'
import { InputField, SubmitButton } from '../../components/form/Fields'
import UserLayout from '../../layouts/UserLayout'
import '../../styles/form/authform.css'

const ResetPassword = () => {
  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Type New Password</h2>
          <form>
            <InputField name="password" text="Password" type="password" onChange={()=>{}}/>
            <InputField name="confirm-password" text="Confirm Password" type="password" onChange={()=>{}}/>
            <SubmitButton text="Set new password" />
          </form>
          <p><Link to={'/auth/login'}>Cancel</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default ResetPassword