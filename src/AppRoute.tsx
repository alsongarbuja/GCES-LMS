import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import UserLayout from './layouts/UserLayout'
import Dashboard from './pages/admin/Dashboard'
import Settings from './pages/admin/Settings'
import AdminProfile from './pages/admin/Profile'
import ForgotPassword from './pages/auth/ForgotPassword'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import BookDetail from './pages/users/BookDetail'
import Explore from './pages/users/Explore'
import Profile from './pages/users/Profile'
import Borrows from './pages/admin/Borrows'
import SemesterList from './pages/admin/semeter/SemesterList'
import SemesterCreate from './pages/admin/semeter/SemesterCreate'
import SemesterEdit from './pages/admin/semeter/SemesterEdit'
import BookList from './pages/admin/book/BookList'
import BookCreate from './pages/admin/book/BookCreate'
import BookEdit from './pages/admin/book/BookEdit'
import BookShow from './pages/admin/book/BookShow'
import UserList from './pages/admin/user/UserList'
import UserCreate from './pages/admin/user/UserCreate'
import UserEdit from './pages/admin/user/UserEdit'
import UserShow from './pages/admin/user/UserShow'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import RouteAuth from './providers/RouteAuth'
import Unauthorized from './pages/Unauthorized'
import Auth from './providers/Auth'
import LevelList from './pages/admin/level/LevelList'
import LevelEdit from './pages/admin/level/LevelEdit'

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteAuth />}>
        <Route path="/" element={<Landing />}/>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="auth/*" element={<AuthRoutes/>} />

        <Route element={<Auth accessingRole={["USER", "SYSTEM_ADMIN"]} />}>
          <Route path="user/*" element={<UserRoutes/>} />
        </Route>
        <Route element={<Auth accessingRole={["SYSTEM_ADMIN"]} />}>
          <Route path="admin/*" element={<AdminRoutes />} /> 
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Route>
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

        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
const UserRoutes = () => {
  return(
    <UserLayout>
      <Routes>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/detail/:bookId" element={<BookDetail/>} />
          <Route path="/profile" element={<Profile/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </UserLayout>
  )
}
const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/borrows" element={<Borrows />} />
        <Route path="/semesters/*" element={<SemesterRoutes />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="/users/*" element={<UsersRoutes />} />
        <Route path="/levels/*" element={<LevelRoutes />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </AdminLayout>
  )
}
const SemesterRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<SemesterList />}/>
      <Route path='/add' element={<SemesterCreate />}/>
      <Route path='/edit/:semesterId' element={<SemesterEdit />}/>

      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
const LevelRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<LevelList />}/>
      {/* <Route path='/add' element={<FineCreate />}/> */}
      <Route path='/edit/:levelId' element={<LevelEdit />}/>
      {/* <Route path='/show/:fineId' element={<FineShow />}/> */}
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
const BookRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<BookList />} />
      <Route path='/add' element={<BookCreate />}/>
      <Route path='/edit/:bookId' element={<BookEdit />}/>
      <Route path='/show/:bookId' element={<BookShow />}/>

        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
const UsersRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<UserList />} />
      <Route path='/add' element={<UserCreate/>}/>
      <Route path='/edit/:userId' element={<UserEdit />}/>
      <Route path='/show/:userId' element={<UserShow />}/>

        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
export default AppRoute