import { useState } from "react"
import { universalAPI } from "../../../api/api"
import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const CategoryCreate = () => {

  const [category, setCategory] = useState({
    name:"",
    level:"",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(prev => ({...prev, [e.target.name]: e.target.value}))
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, status, message } = await universalAPI('POST', '/category', category)

    if(status === 'success'){
      console.log(data);
      
      setCategory(prev => ({
        ...prev, 
        name: "",
      }))
    }else{
      console.error(message);
    }
  }

  return (
    <FormLayout title="Create Category" submitHandler={handleSubmit}>
        <div className="form-row row">
          <InputField opt="col-6" name="name" text="Category Name" value={category.name} onChange={handleChange} />
          <Select opt="col-6" name="level" text="Level" value={category.level} onChange={handleChange} 
            options={[{ value: 'Bachelor', option: 'Bachelor' }, { value: 'Master', option: 'Master' }]}
          />
        </div>
    </FormLayout>
  )
}

export default CategoryCreate