import { useEffect, useState } from "react";
import { universalAPI } from "../../../api/api";
import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"
import { UserModel } from "../../../types/models";

const faculty = [
    {
        value: 'Software',
        option: 'Software',
    },
    {
        value: 'Computer',
        option: 'Computer',
    }
];

const UserCreate = () => {
    const [user, setUser] = useState<UserModel>({
        batch: '',
        email: '',
        faculty: '',
        name: '',
        semester: '',
        regNo: '',
        phone: '',
    })
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        const { data, status, message } = await universalAPI('GET', '/category')
        if(status === 'success'){
            setCategories(data.map((c: { _id: string, name: string}) => ({value: c.name, option: c.name})))
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(prev => ({...prev, [e.target.name]: e.target.value}))
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        let toSendUser: UserModel = {
            batch: user.batch,
            email: user.email,
            faculty: user.faculty,
            name: user.name,
            semester: user.semester,
            password: 'gces12345',    
        }

        if(user.regNo!==''){
            toSendUser = {
                ...toSendUser,
                regNo: user.regNo,
            }
        }
        if(user.phone!==''){
            toSendUser = {
                ...toSendUser,
                phone: user.phone,
            }
        }

        const { data, status, message } = await universalAPI('POST', '/users', toSendUser)

        if(status==='success'){
            console.log(data);
            
            setUser({
                batch: '',
                email: '',
                faculty: '',
                name: '',
                semester: '',
                regNo: '',
                phone: '',
            })
        }else{
            console.error(message);
        }
    }

  return (
    <FormLayout title="Create User" submitHandler={handleSubmit}>
        <div className="form-row row">
            <div className="col-6">
                <InputField name="name" value={user.name} text="Name" onChange={handleChange} />
                <Select name="semester" value={user.semester} text="Semester" options={categories} onChange={handleChange} />
                <InputField name="batch" value={user.batch} text="Batch" onChange={handleChange} />
                <Select name="faculty" value={user.faculty||"Software"} text="Faculty" options={faculty} onChange={handleChange} />
            </div>
            <div className="col-6">
                <InputField name="email" value={user.email} text="Email" type="email" onChange={handleChange} />
                <InputField name="phonenumber" value={user.phone} text="Phone number" onChange={handleChange} required={false} />
                <InputField name="reg" value={user.regNo} text="Registration Number" onChange={handleChange} required={false} />
            </div>
        </div>
    </FormLayout>
  )
}

export default UserCreate