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
        selected: true,
    }
];
const faculty = [
    {
        value: 'software',
        option: 'Software',
        selected: true,
    },
    {
        value: 'computer',
        option: 'Computer',
        selected: false,
    }
];

const UserEdit = () => {
  return (
    <FormLayout title="Create User" submitHandler={()=>{}}>
        <div className="form-row row">
            <div className="col-6">
                <InputField name="name" text="Name" onChange={()=>{}} value="Alson Garbuja" />
                <Select name="semester" text="Semester" options={sem} />
                <InputField name="year" text="Batch" onChange={()=>{}} value="2018" />
                <Select name="faculty" text="Faculty" options={faculty} />
            </div>
            <div className="col-6">
                <InputField name="email" text="Email" type="email" onChange={()=>{}} value="be2018se607@gces.edu.np" />
                <InputField name="phonenumber" text="Phone number" onChange={()=>{}} value="9825140801" />
                <InputField name="reg" text="Registration Number" onChange={()=>{}} value="GCS 06" />
            </div>
        </div>
    </FormLayout>
  )
}

export default UserEdit