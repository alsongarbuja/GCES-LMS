import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/auth/ForgotPassword'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import BookDetail from './pages/users/BookDetail'
import Explore from './pages/users/Explore'
import Profile from './pages/users/Profile'

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<div>Welcome</div>}/>
        <Route path="/auth/*" element={<AuthRoutes/>} />
        <Route path="/user/*" element={<UserRoutes/>} />
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

const UserRoutes = () => {
  return(
    <Routes>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/detail/:bookId" element={<BookDetail/>} />
        <Route path="/profile" element={<Profile/>} />
    </Routes>
  )
}
export default AppRoute