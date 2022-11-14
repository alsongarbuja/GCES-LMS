import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { universalAPI } from '../../api/api'
import { InputField, Select, SubmitButton } from '../../components/form/Fields'
import UserLayout from '../../layouts/UserLayout'
import '../../styles/form/authform.css'

const Register = () => {
  
  const navigate = useNavigate()

  // * state to hold the data for input fields in the form
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
  // * state to hold the error if any
  // ** @errorType - type of error (ex: password, email, etc)
  // ** @message - hold the error message
  const [error, setError] = useState({
    errorType: '',
    message: '',
  })

  const [level, setLevel] = useState('Bachelors')
  const [semesters, setSemesters] = useState([])
  const [btnLoading, setButtonLoading] = useState(false)

  /** 
   * 
   * @param e 
  */
  // handle input and select changes  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(prev => ({...prev, [e.target.name]: e.target.value}))

  /**
   * 
   * @param e 
   */
  // handle registering and catching errors
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    setButtonLoading(true)

    // check if the passwords match
    if(user.password===user.confirmPassword){
      // check if the email is provided by GCES or not
      if(user.email.match(/^be20[0-9]{2}(s|c)e[0-9]{1,3}@gces.edu.np$/g)){
        const toSendUser = {
          name: user.name,
          email: user.email,
          batch: user.batch,
          semester: user.semester,
          regNo: user.regNo,
          phone: user.phone,
          password: user.password,
          faculty: user.faculty,
          level: level,
        }

        // call API for registering user
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
          message: 'Use the GCES email!!!'
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

    setButtonLoading(false)
  }

  // select options for fauclty
  const facultyOptions = [
    { value: 'software', option: 'Software' },
    { value: 'computer', option: 'Computer' },
  ]

  const fetchSemesters = async () => {
    const { data, status, message } = await universalAPI('GET', '/category')
    if(status==='success'){
      console.log(data);
      
      setSemesters(data.map((s: { _id: string, name: string, level: string }) => ({ value: s.name, option: s.name, level: s.level })))
    }else{
      console.error(message);
    }
  }

  useEffect(() => {
    fetchSemesters()
  }, [])

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
              <InputField opt="col-6" name="email" text="Email" type="email" onChange={handleChange} value={user.email} placeholder="Use the GCES email"
                error={{ hasError: error.errorType==='email', message: error.message }}
              />
            </div>
            <div className="row">
              <InputField opt="col-6" name="batch" text="Batch" onChange={handleChange} value={user.batch} 
                error={{ hasError: error.errorType==='batch', message: error.message }}
              />
              <InputField opt="col-6" name="regNo" text="Registration Number" onChange={handleChange} value={user.regNo} 
                error={{ hasError: error.errorType==='regNo', message: error.message }}
              />
            </div>
            <div className="row">
              <InputField opt="col-6" name="phone" text="Phone number" onChange={handleChange} value={user.phone} 
                error={{ hasError: error.errorType==='phone', message: error.message }}
              />
              <Select opt="col-6" name="faculty" text="Faculty" options={facultyOptions} value={user.faculty} onChange={handleChange} />
            </div>
            <div className="row">
              <Select opt="col-6" name="level" text="Bachelors" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLevel(e.target.value)} options={[{ value: 'Bachelors', option: 'Bachelors' }, { value: 'Masters', option: 'Masters' },]} value={level} />
              <Select opt="col-6" name="semester" text="Semester" onChange={handleChange} value={user.semester} options={semesters.filter((sm: { level: string }) => sm.level === level)} />
            </div>
            <div className="row">
              <InputField opt="col-6" name="password" text="Password" type="password" onChange={handleChange} value={user.password} error={{hasError: error.errorType==='password', message: error.message}} />
              <InputField opt="col-6" name="confirmPassword" text="Confirm Password" type="password" onChange={handleChange}value={user.confirmPassword} error={{hasError: error.errorType==='password', message: error.message}} />
            </div>
            <SubmitButton text="Register" isLoading={btnLoading} />
          </form>
          <p><Link to={'/auth/login'}>Already have account? Login</Link></p>
          <p><Link to={'/auth/forgot-password'}>Forgot Password?</Link></p>
        </div>
      </main>
    </UserLayout>
  )
}

export default Register