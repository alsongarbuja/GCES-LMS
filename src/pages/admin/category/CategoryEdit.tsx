import { InputField } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const CategoryEdit = () => {
  return (
    <FormLayout title="Edit Category" submitHandler={()=>{}} isEdit>
        <div className="form-row">
            <InputField name="name" text="Category Name" onChange={()=>{}} value="5th Semester"/>
        </div>
    </FormLayout>
  )
}

export default CategoryEdit