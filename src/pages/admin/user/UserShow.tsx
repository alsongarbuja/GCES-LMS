/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { InputField } from "../../../components/form/Fields"
import ShowLayout from "../../../layouts/crud/ShowLayout"
import { UserModel } from "../../../types/models"

const UserShow = () => {
    const { userId } = useParams()
    const [user, setUser] = useState<UserModel>()
    const [password, setPassword] = useState('')

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

    const changePassword = async () => {
        if(window.confirm('Change the password?')){
            const { data, status, message } = await universalAPI('PATCH', `/users/${userId}`, { password })
            if(status==='success'){
                window.location.reload()
            }else{
                console.error(message, data);
            }
        }
    }

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
                <div className="flex flex-start">
                    <InputField 
                        name="password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                        text="Change Password"
                        value={password}
                        opt="m-0"
                    />
                    <button className="btn btn-accent-two mt-2" onClick={changePassword}>Change Password</button>
                </div>
            </div>
        </div>
    </ShowLayout>
  )
}

export default UserShow