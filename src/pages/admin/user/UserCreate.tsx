import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const sem = [
    {
        value: '1-sem',
        option: '1st Semester',
        selected: false,
    },
    {
        value: '6-sem',
        option: '6th Semester',
        selected: false,
    }
];
const faculty = [
    {
        value: 'software',
        option: 'Software',
        selected: false,
    },
    {
        value: 'computer',
        option: 'Computer',
        selected: false,
    }
];

const UserCreate = () => {
  return (
    <FormLayout title="Create User" submitHandler={()=>{}}>
        <div className="form-row row">
            <div className="col-6">
                <InputField name="name" text="Name" onChange={()=>{}} />
                <Select name="semester" text="Semester" options={sem} />
                <InputField name="year" text="Batch" onChange={()=>{}} />
                <Select name="faculty" text="Faculty" options={faculty} />
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