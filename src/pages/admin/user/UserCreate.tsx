import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const sem = [
    {
        value: '1-sem',
        option: '1st Semester',
    },
    {
        value: '6-sem',
        option: '6th Semester',
    }
];
const faculty = [
    {
        value: 'software',
        option: 'Software',
    },
    {
        value: 'computer',
        option: 'Computer',
    }
];

const UserCreate = () => {
  return (
    <FormLayout title="Create User" submitHandler={()=>{}}>
        <div className="form-row row">
            <div className="col-6">
                <InputField name="name" text="Name" onChange={()=>{}} />
                <Select name="semester" value="6-sem" text="Semester" options={sem} onChange={()=>{}} />
                <InputField name="year" text="Batch" onChange={()=>{}} />
                <Select name="faculty" value="software" text="Faculty" options={faculty} onChange={()=>{}} />
            </div>
            <div className="col-6">
                <InputField name="email" text="Email" type="email" onChange={()=>{}} />
                <InputField name="phonenumber" text="Phone number" onChange={()=>{}} />
                <InputField name="reg" text="Registration Number" onChange={()=>{}} />
            </div>
        </div>
    </FormLayout>
  )
}

export default UserCreate