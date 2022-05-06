import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { universalAPI } from '../../api/api'
import { InputField, Select, SubmitButton } from '../../components/form/Fields'
import UserLayout from '../../layouts/UserLayout'
import '../../styles/form/authform.css'

const Register = () => {
  
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    regNo: '',
    semester: '1',
    batch: '',
    faculty: 'software',
  })
  const [error, setError] = useState({
    errorType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(prev => ({...prev, [e.target.name]: e.target.value}))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if(user.password===user.confirmPassword){
      // register user
      if(user.email.match(/^be20[0-9]{2}(s|c)e[0-9]{1,3}@gces.edu.np$/g)){
        const toSendUser = {
          name: user.name,
          email: user.email,
          batch: user.batch,
          semester: user.semester,
          regNo: user.regNo,
          phone: user.phone,
          password: user.password,
          faculty: user.faculty
        }

        const { status, message } = await universalAPI('POST', '/auth/register', toSendUser)
        
        if(status==='success'){
          navigate('/auth/login')
        }else{
          setError(prev => ({
            ...prev,
            errorType: message.split(' ')[0].toLowerCase(),
            message: message,
          }))
        }
      }else{
        setError(prev => ({
          ...prev,
          errorType: 'email',
          message: 'Use the Bese email!!!'
        }))
        setUser(prev => ({ ...prev, email: '', password: '', confirmPassword: '' }))
      }
    }else{
      setError(prev => ({
        ...prev,
        errorType: 'password',
        message: 'Password didnot match'
      }))
      setUser(prev => ({ ...prev, password: '', confirmPassword: '' }))
    }    
  }

  const facultyOptions = [
    { value: 'software', option: 'Software' },
    { value: 'computer', option: 'Computer' },
  ]
  const semOptions = [
    { value: '1', option: '1st Semester' },
    { value: '2', option: '2nd Semester' },
    { value: '3', option: '3rd Semester' },
    { value: '4', option: '4th Semester' },
    { value: '5', option: '5th Semester' },
    { value: '6', option: '6th Semester' },
    { value: '7', option: '7th Semester' },
    { value: '8', option: '8th Semester' },
  ]

  return (
    <UserLayout>
      <main>
        <div className="auth-form register-form">
          <h2>Register</h2>
          <form onSubmit={submitHandler}>
            <div className="row">
              <InputField opt="col-6" name="name" text="Full Name" onChange={handleChange} value={user.name} 
                error={{ hasError: error.errorType==='name', message: error.message }}
              />
              <InputField opt="col-6" name="email" text="Email" type="email" onChange={handleChange} value={user.email} placeholder="Use the Bese email"
                error={{ hasError: error.errorType==='email', message: error.message }}
              />
            </div>
            <div className="row">
              <InputField opt="col-6" name="batch" text="Batch" onChange={handleChange} value={user.batch} 
                error={{ hasError: error.errorType==='batch', message: error.message }}
              />
              <Select opt="col-6" name="semester" text="Semester" onChange={handleChange} value={user.semester} options={semOptions} />
            </div>
            <div className="row">
              <InputField opt="col-6" name="phone" text="Phone number" onChange={handleChange} value={user.phone} 
                error={{ hasError: error.errorType==='phone', message: error.message }}
              />
              <InputField opt="col-6" name="regNo" text="Registration Number" onChange={handleChange} value={user.regNo} 
                error={{ hasError: error.errorType==='regNo', message: error.message }}
              />
            </div>
            <Select name="faculty" text="Faculty" options={facultyOptions} value={user.faculty} onChange={handleChange} />
            <div className="row">
              <InputField opt="col-6" name="password" text="Password" type="password" onChange={handleChange} value={user.password} error={{hasError: error.errorType==='password', message: error.message}} />
              <InputField opt="col-6" name="confirmPassword" text="Confirm Password" type="password" onChange={handleChange}value={user.confirmPassword} error={{hasError: error.errorType==='password', message: error.message}} />
            </div>
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