import { InputField } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const CategoryCreate = () => {
  return (
    <FormLayout title="Create Category" submitHandler={()=>{}}>
        <div className="form-row">
            <InputField name="name" text="Category Name" onChange={()=>{}} />
        </div>
    </FormLayout>
  )
}

export default CategoryCreate