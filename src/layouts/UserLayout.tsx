import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Props from "../types/props"

const UserLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
        <UserHeader />
        {children}
        <Footer />
    </>
  )
}

export default UserLayout