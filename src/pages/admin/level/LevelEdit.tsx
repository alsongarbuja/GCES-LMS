/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { InputField } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"

const LevelEdit = () => {

  const { levelId } = useParams()

  const [level, setLevel] = useState({
    level: "",
    fine: 0,
    limitReference: 0,
    limitText: 0,
    limitOther: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'level')
      setLevel(prev => ({...prev, [e.target.name]: e.target.value}))
    else
      setLevel(prev => ({...prev, [e.target.name]: parseInt(e.target.value)}))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const toSendLevel = {
      level: level.level,
      fine: level.fine,
      limit: [
        {type: 'text-book', quantity: level.limitText},
        {type: 'reference', quantity: level.limitReference},
        {type: 'others', quantity: level.limitOther},
        {type: 'total', quantity: level.limitText + level.limitReference}
      ]
    }
    
    const { data, status, message } = await universalAPI('PATCH',`/levels/${levelId}`, toSendLevel)

    if(status === 'success'){
      console.log(data);
      
      window.location.reload();
    }
    else{
      console.error(message);
    }
  }

  const fetchLevel = async () => {
    const { data, status, message } = await universalAPI('GET',`/levels/${levelId}`)
    if(status === 'success'){
      setLevel({
        level: data.level,
        fine: data.fine,
        limitText: data.limit[0].quantity,
        limitReference: data.limit[1].quantity,
        limitOther: data.limit[2].quantity,
      })
    }
    else{
      console.error(message);
    }
  }

  useEffect(() => {
    fetchLevel()
  }, [])

  return (
    <FormLayout title="Edit Level" submitHandler={handleSubmit} isEdit>
        <div className="form-row row">
          <InputField opt="col-6" name="level" text="Level Name" onChange={handleChange} value={level.level}/>
          <InputField opt="col-6" name="fine" type="number" text="Fine Amount" onChange={handleChange} value={level.fine}/>
          <InputField opt="col-6" name="limitText" type="number" text="Text Book Limit" onChange={handleChange} value={level.limitText}/>
          <InputField opt="col-6" name="limitReference" type="number" text="Reference Book Limit" onChange={handleChange} value={level.limitReference}/>
          <InputField opt="col-6" name="limitOther" type="number" text="Others Book Limit" onChange={handleChange} value={level.limitOther}/>
        </div>
    </FormLayout>
  )
}

export default LevelEdit