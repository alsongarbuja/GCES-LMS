import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const LimitEdit = () => {
  return (
    <FormLayout title="Edit Limit" submitHandler={()=>{}} isEdit>
        <div className="form-row">
            <InputField name="limit" type="number" text="Limit" onChange={()=>{}} value="6"/>
            <Select value="masters" name="level" text="Level" onChange={()=>{}} options={[{value: 'bachelors', option: 'Bachelors'}, {value: 'masters', option: 'Masters'}]} />
        </div>
    </FormLayout>
  )
}

export default LimitEdit