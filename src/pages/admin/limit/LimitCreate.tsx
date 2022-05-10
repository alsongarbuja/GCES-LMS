import React, { useState } from "react"
import { universalAPI } from "../../../api/api"
import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const LimitCreate = () => {
  const [limit, setLimit] = useState({
    level: "Bachelors",
    textLimit: "",
    referenceLimit: "",
    othersLimit: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setLimit(prev => ({...prev, [e.target.name]: e.target.value}))
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(parseInt(limit.textLimit) < 0 || parseInt(limit.referenceLimit) < 0 || parseInt(limit.othersLimit) < 0){
      console.error("Cannot be negative");
    }
    else{
      const limitObj = {
        quantity: parseInt(limit.textLimit) + parseInt(limit.referenceLimit) + parseInt(limit.othersLimit),
        level : limit.level,
        sub_quantity: [
          {
            quantity: limit.textLimit,
            type: 'text-book',
          },
          {
            quantity: limit.referenceLimit,
            type: 'reference',
          },
          {
            quantity: limit.othersLimit,
            type: 'others',
          }
        ],
      }

      const { data, status, message } = await universalAPI('POST', '/limit', limitObj)

      if(status === 'success'){
        console.log(data);
        
        setLimit(prev => ({
          ...prev, 
          level: "Bachelors",
          textLimit: "",
          referenceLimit: "",
          othersLimit: "",
        }))
      }
      else{
        console.error(message);
      }
    }
  }

  return (
    <FormLayout title="Create Limit" submitHandler={handleSubmit}>
        <div className="form-row">
            <Select name="level" value={limit.level} text="Level" onChange={handleChange} options={[{value: 'Bachelors', option: 'Bachelors'}, {value: 'Masters', option: 'Masters'}]} />
            <InputField name="textLimit" type="number" text="Textbook Limit" value={limit.textLimit} onChange={handleChange} />
            <InputField name="referenceLimit" type="number" text="Reference book Limit" value={limit.referenceLimit} onChange={handleChange} />
            <InputField name="othersLimit" type="number" text="Others Limit" value={limit.othersLimit} onChange={handleChange} />
        </div>
    </FormLayout>
  )
}

export default LimitCreate