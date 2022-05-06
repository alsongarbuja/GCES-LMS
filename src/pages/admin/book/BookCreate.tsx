import { InputField, Select } from '../../../components/form/Fields'
import FormLayout from '../../../layouts/crud/FormLayout'

const bookType = [
    {
        value: 'text-book',
        option: 'Text Book',
    },
    {
        value: 'reference',
        option: 'Reference',
    }
];
const categories = [
    {
        value: '1-sem',
        option: '1st Semester',
    },
    {
        value: '5-sem',
        option: '5th Semester',
    }
];

const BookCreate = () => {
  return (
    <FormLayout title="Create Book" submitHandler={()=>{}}>
        <div className="form-row row">
            <div className="col-6">
                <InputField name="title" text="Book title" onChange={()=>{}} />
                <InputField name="secondary_title" text="Secondary title" onChange={()=>{}} />
                <InputField name="author" text="Author Name" onChange={()=>{}} />
                <InputField name="publisher" text="Publisher" onChange={()=>{}} />
                <InputField name="edition" text="Edition" type="number" onChange={()=>{}} />
                <InputField name="quantity" text="Total Copies" type="number" onChange={()=>{}} />
            </div>
            <div className="col-6">
                <InputField name="ISBN_number" text="ISBN Number" required={false} onChange={()=>{}} />
                <InputField name="Barcode_number" text="Barcode Number" required={false} onChange={()=>{}} />
                <InputField name="year" text="Year" type="number" onChange={()=>{}} />
                <Select value="text-book" name="type" text="Type" options={bookType} onChange={()=>{}} />
                <Select value="5-sem" name="category" text="Semester" options={categories} onChange={()=>{}} />
                <div className="row"></div>
            </div>
        </div>
    </FormLayout>
  )
}

export default BookCreate