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
import CategoryList from './pages/admin/category/CategoryList'
import CategoryCreate from './pages/admin/category/CategoryCreate'
import CategoryEdit from './pages/admin/category/CategoryEdit'
import LimitCreate from './pages/admin/limit/LimitCreate'
import LimitList from './pages/admin/limit/LimitList'
import LimitEdit from './pages/admin/limit/LimitEdit'
import BookList from './pages/admin/book/BookList'
import BookCreate from './pages/admin/book/BookCreate'
import BookEdit from './pages/admin/book/BookEdit'
import BookShow from './pages/admin/book/BookShow'
import UserList from './pages/admin/user/UserList'
import UserCreate from './pages/admin/user/UserCreate'
import UserEdit from './pages/admin/user/UserEdit'
import UserShow from './pages/admin/user/UserShow'
import Landing from './pages/Landing'
import Credit from './pages/Credit'
import LimitShow from './pages/admin/limit/LimitShow'
import NotFound from './pages/NotFound'

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/credit" element={<Credit />}/>
        <Route path="/auth/*" element={<AuthRoutes/>} />
        <Route path="/user/*" element={<UserRoutes/>} />
        <Route path="/admin/*" element={<AdminRoutes />} /> 

        <Route path="*" element={<NotFound/>} />
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
        <Route path="/categories/*" element={<CategoryRoutes />} />
        <Route path="/limit/*" element={<LimitRoutes />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="/users/*" element={<UsersRoutes />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </AdminLayout>
  )
}
const CategoryRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<CategoryList />}/>
      <Route path='/add' element={<CategoryCreate />}/>
      <Route path='/edit/:categoryId' element={<CategoryEdit />}/>

      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
const LimitRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<LimitList />}/>
      <Route path='/add' element={<LimitCreate />}/>
      <Route path='/edit/:limitId' element={<LimitEdit />}/>
      <Route path='/show/:limitId' element={<LimitShow />}/>

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