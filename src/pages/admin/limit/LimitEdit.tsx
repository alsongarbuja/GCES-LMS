/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const LimitEdit = () => {

  const { limitId } = useParams()

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

      const { data, status, message } = await universalAPI('PATCH', `/limit/${limitId}`, limitObj)

      if(status === 'success'){
        console.log(data);
        
        window.location.reload();
      }
      else{
        console.error(message);
      }
    }
  }

  const fetchLimit = async () => {
    const { data, status, message } = await universalAPI('GET', `/limit/${limitId}`)

    if(status === 'success'){
        setLimit(prev => ({
          ...prev,
          level: data.level,
          textLimit: data.sub_quantity.filter((sq: {type: string, quantity: string}) => sq.type === 'text-book')[0].quantity,
          referenceLimit: data.sub_quantity.filter((sq: {type: string, quantity: string}) => sq.type === 'reference')[0].quantity,
          othersLimit: data.sub_quantity.filter((sq: {type: string, quantity: string}) => sq.type === 'others')[0].quantity, 
        }))
    }else{
        console.error(message);
    }
  }

  useEffect(() => {
      fetchLimit()
  }, [])

  return (
    <FormLayout title="Edit Limit" submitHandler={handleSubmit} isEdit>
        <div className="form-row">
          <Select name="level" value={limit.level} text="Level" onChange={handleChange} options={[{value: 'Bachelors', option: 'Bachelors'}, {value: 'Masters', option: 'Masters'}]} />
          <InputField name="textLimit" type="number" text="Textbook Limit" value={limit.textLimit} onChange={handleChange} />
          <InputField name="referenceLimit" type="number" text="Reference book Limit" value={limit.referenceLimit} onChange={handleChange} />
          <InputField name="othersLimit" type="number" text="Others Limit" value={limit.othersLimit} onChange={handleChange} />
        </div>
    </FormLayout>
  )
}

export default LimitEdit