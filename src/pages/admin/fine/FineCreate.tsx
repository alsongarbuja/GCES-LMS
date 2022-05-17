import { useState } from "react";
import { universalAPI } from "../../../api/api";
import { InputField } from "../../../components/form/Fields"
import FormLayout from "../../../layouts/crud/FormLayout"
import { FineModel } from "../../../types/models";

const FineCreate = () => {

    const [fine, setFine] = useState<FineModel>({
       fine: 0,
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFine(prev => ({...prev, [e.target.name]: e.target.value}))
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const { status, message } = await universalAPI('POST', '/fine/' , fine)

        if(status==='success'){
           window.location.reload();
        }else{
            console.error(message);
        }
    }

  return (
    <FormLayout title="Create Fine" submitHandler={handleSubmit}>
        <div className="form-row row">
            <div className="col-6">
                <InputField value={fine.fine} name="fine" text="Fine Amount" onChange={handleChange} />
            </div>
        </div>
    </FormLayout>
  )
}

export default FineCreate