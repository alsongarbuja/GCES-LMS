/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const CategoryEdit = () => {

  const { categoryId } = useParams()

  const [category, setCategory] = useState({
    name: "",
    level:"",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(prev => ({...prev, [e.target.name]: e.target.value}))
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, status, message } = await universalAPI('PATCH',`/category/${categoryId}`, category)

    if(status === 'success'){
      console.log(data);
      
      window.location.reload();
    }
    else{
      console.error(message);
    }
  }

  const fetchCategory = async () => {
    const { data, status, message } = await universalAPI('GET', `/category/${categoryId}`)

    if(status === 'success'){
      setCategory(prev => ({
        ...prev,
        name: data.name,
        level: data.level, 
      }))
    }else{
      console.error(message);
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <FormLayout title="Edit Category" submitHandler={handleSubmit} isEdit>
        <div className="form-row row">
          <InputField opt="col-6" name="name" text="Category Name" onChange={handleChange} value={category.name}/>
          <Select opt="col-6" name="level" text="Level" value={category.level} onChange={handleChange} 
            options={[{ value: 'Bachelor', option: 'Bachelor' }, { value: 'Master', option: 'Master' }]}
          />
        </div>
    </FormLayout>
  )
}

export default CategoryEdit