import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const LimitCreate = () => {
  return (
    <FormLayout title="Create Limit" submitHandler={()=>{}}>
        <div className="form-row">
            <InputField name="limit" type="number" text="Limit" onChange={()=>{}} />
            <Select name="level" text="Level" options={[{value: 'bachelors', option: 'Bachelors', selected:false}, {value: 'masters', option: 'Masters', selected:false}]} />
        </div>
    </FormLayout>
  )
}

export default LimitCreate