import { Navigate, Outlet, useLocation } from "react-router-dom"
import { getAccessToken, getUserRole } from "../helper/cookies"

const Auth = ({ accessingRole }: { accessingRole: string[] }) => {
    const accessToken = getAccessToken()
    const role = getUserRole()
    const location = useLocation()

  return (
    accessingRole.includes(role)
        ?<Outlet />
        : accessToken ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        :<Navigate to="/auth/login" state={{ from: location }} replace />
  )
}

export default Auth