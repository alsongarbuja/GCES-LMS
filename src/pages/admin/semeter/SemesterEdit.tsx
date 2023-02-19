/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { InputField, Select } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"
import { SemesterModel } from "../../../types/models"

const SemesterEdit = () => {

  const { semesterId } = useParams()

  const [levels, setLevels] = useState([])
  const [semester, setSemester] = useState<SemesterModel>({
    name: "",
    level: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSemester(prev => ({...prev, [e.target.name]: e.target.value}))
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, status, message } = await universalAPI('PATCH',`/semesters/${semesterId}`, semester)

    if(status === 'success'){
      console.log(data);
      
      window.location.reload();
    }
    else{
      console.error(message);
    }
  }

  const fetchSemester = async () => {
    const { data, status, message } = await universalAPI('GET', `/semesters/${semesterId}`)

    if(status === 'success'){
      setSemester(prev => ({
        ...prev,
        name: data.name,
        level: data.level, 
      }))
    }else{
      console.error(message);
    }
  }

  const fetchLevels = async () => {
    const { data, status, message } = await universalAPI('GET', '/levels');

    if(status === 'success'){
      setLevels(data)
    }else{
      console.error(message);
    }
  }

  useEffect(() => {
    fetchLevels()
    fetchSemester()
  }, [])

  return (
    <FormLayout title="Edit Semester" submitHandler={handleSubmit} isEdit>
        <div className="form-row row">
          <InputField opt="col-6" name="name" text="Semester Name" onChange={handleChange} value={semester.name}/>
          <Select opt="col-6" name="level" text="Level" value={typeof semester.level === 'string' ? semester.level : semester.level?._id} onChange={handleChange} 
            options={levels.map((level: { _id: string, level: string }) => ({value: level?._id, option: level?.level}))}
          />
        </div>
    </FormLayout>
  )
}

export default SemesterEdit