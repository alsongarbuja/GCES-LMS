/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import ShowLayout from "../../../layouts/crud/ShowLayout"
import { UserModel } from "../../../types/models"

const UserShow = () => {
    const { userId } = useParams()
    const [user, setUser] = useState<UserModel>()

    const fetchUser = async () => {
        const { data, status, message } = await universalAPI('GET', `/users/${userId}`)
        if(status==='success'){
            setUser(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

  return (
    <ShowLayout title='User'>
        <div className='row'>
            <div className='col-6'>
                <p>
                    <b>Name : </b> {user?.name}
                </p>
                <p>
                    <b>Semester : </b> {user?.semester}
                </p>
                <p>
                    <b>Batch : </b> {user?.batch}
                </p>
                <p>
                    <b>Registration number : </b> {user?.regNo}
                </p>
                <p>
                    <b>Email : </b> {user?.email}
                </p>
            </div>
            <div className="col-6">
                <p>
                    <b>Faculty : </b> {user?.faculty}
                </p>
                <p>
                    <b>Phone number : </b> {user?.phone}
                </p>
                <p>
                    <b>Current Borrow : </b> {user?.borrowed_books?.length}
                </p>
                <p>
                    <b>Fine : </b> Rs. {user?.totalFine}
                </p>
            </div>
        </div>
    </ShowLayout>
  )
}

export default UserShow