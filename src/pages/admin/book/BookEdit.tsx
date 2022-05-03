import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const bookType = [
    {
        value: 'text-book',
        option: 'Text Book',
        selected: false,
    },
    {
        value: 'reference',
        option: 'Reference',
        selected: false,
    }
];
const categories = [
    {
        value: '1-sem',
        option: '1st Semester',
        selected: false,
    },
    {
        value: '5-sem',
        option: '5th Semester',
        selected: true,
    }
];

const BookEdit = () => {
  return (
    <FormLayout title="Edit Book" submitHandler={()=>{}} isEdit>
        <div className="form-row row">
            <div className="col-6">
                <InputField name="title" text="Book title" onChange={()=>{}} value="OOD" />
                <InputField name="secondary_title" text="Secondary title" onChange={()=>{}} value="Design System" />
                <InputField name="author" text="Author Name" onChange={()=>{}} value="Bidue Devkota" />
                <InputField name="publisher" text="Publisher" onChange={()=>{}} value="Sukunda" />
                <InputField name="edition" text="Edition" type="number" onChange={()=>{}} value="2" />
            </div>
            <div className="col-6">
                <InputField name="ISBN_number" text="ISBN Number" required={false} onChange={()=>{}} value="1238747-2283-23Na3" />
                <InputField name="Barcode_number" text="Barcode Number" required={false} onChange={()=>{}} />
                <InputField name="quantity" text="Total Copies" type="number" onChange={()=>{}} value="4" />
                <InputField name="year" text="Year" type="number" onChange={()=>{}} value="1998" />
                <Select name="type" text="Type" options={bookType} />
                <Select name="category" text="Semester" options={categories} />
            </div>
        </div>
    </FormLayout>
  )
}

export default BookEdit