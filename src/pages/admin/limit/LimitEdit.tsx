import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const LimitEdit = () => {
  return (
    <FormLayout title="Edit Limit" submitHandler={()=>{}} isEdit>
        <div className="form-row">
            <InputField name="limit" type="number" text="Limit" onChange={()=>{}} value="6"/>
            <Select name="level" text="Level" options={[{value: 'bachelors', option: 'Bachelors', selected:false}, {value: 'masters', option: 'Masters', selected:true}]} />
        </div>
    </FormLayout>
  )
}

export default LimitEdit