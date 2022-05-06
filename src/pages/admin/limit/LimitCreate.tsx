import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const LimitCreate = () => {
  return (
    <FormLayout title="Create Limit" submitHandler={()=>{}}>
        <div className="form-row">
            <InputField name="limit" type="number" text="Limit" onChange={()=>{}} />
            <Select name="level" value="bachelors" text="Level" onChange={()=>{}} options={[{value: 'bachelors', option: 'Bachelors'}, {value: 'masters', option: 'Masters'}]} />
        </div>
    </FormLayout>
  )
}

export default LimitCreate