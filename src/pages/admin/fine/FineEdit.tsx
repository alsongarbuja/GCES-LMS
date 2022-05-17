/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { universalAPI } from "../../../api/api";
import { InputField } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"
import { FineModel } from "../../../types/models";

const FineEdit = () => {

    const { fineId } = useParams()
    const [fine, setFine] = useState<FineModel>({
       fine: 0,
    })
    const fetchFine = async () => {
        const { data, status, message } = await universalAPI('GET', `/fine/${fineId}`)

        if(status==='success'){
            setFine(prev => ({
                ...prev,
                fine: data.fine,
            }))
        }else{
            console.error(message);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFine(prev => ({...prev, [e.target.name]: e.target.value}))
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const { status, message } = await universalAPI('PATCH', `/fine/${fineId}`, fine)

        if(status==='success'){
           window.location.reload();
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchFine()
    }, [])

  return (
    <FormLayout title="Edit Fine" submitHandler={handleSubmit} isEdit>
        <div className="form-row row">
            <div className="col-6">
                <InputField value={fine.fine} name="fine" text="Fine Amount" onChange={handleChange} />
            </div>
        </div>
    </FormLayout>
  )
}

export default FineEdit