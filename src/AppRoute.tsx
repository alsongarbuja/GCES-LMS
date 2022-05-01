import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/auth/ForgotPassword'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<div>Welcome</div>}/>
        <Route path="/auth/*" element={<AuthRoutes/>} />
    </Routes>
  )
}

const AuthRoutes = () => {
  return(
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
    </Routes>
  )
}

export default AppRoute