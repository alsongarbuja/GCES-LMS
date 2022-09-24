import { useState, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { universalAPI } from '../../api/api'
import { InputField, SubmitButton } from '../../components/form/Fields'
import UserLayout from '../../layouts/UserLayout'
import '../../styles/form/authform.css'

const ResetPassword = () => {

  const navigate = useNavigate();
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  
  const [pass, setPass] = useState({
    password: '',
    confirmPassword: '',
  })
  
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()

    if(pass.password === pass.confirmPassword){
      const { status } = await universalAPI('POST', `/auth/reset-password?token=${query.get('token')}`, {password: pass.password});

      if(status === 'success'){
        navigate('/auth/login');
      }else{
        alert('Reset link expired');
      }
    }else{
      alert('Password not matched');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPass(prev => ({...prev, [e.target.name]: e.target.value}))

  return (
    <UserLayout>
      <main>
        <div className="auth-form">
          <h2>Type New Password</h2>
          <form onSubmit={handleResetPassword}>
            <InputField name="password" text="Password" type="password" onChange={handleChange}/>
            <InputField name="confirmPassword" text="Confirm Password" type="password" onChange={handleChange}/>
            <SubmitButton text="Set new password" />
          </form>
          <p><Link to={'/auth/login'}>Cancel</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default ResetPassword