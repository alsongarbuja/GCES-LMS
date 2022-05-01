import { ChangeEventHandler } from "react";
import '../../styles/form/fields.css'

export const InputField = ({ name, type='text', placeholder='', text, onChange }: {
    name: string,
    type?: string,
    placeholder?: string,
    text: string,
    onChange: ChangeEventHandler,
}) => {
    return(
        <div className="form-group">
            <label>{text}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export const SubmitButton = ({text}: {text: string}) => {
    return(
        <button type="submit" className="btn submit-btn btn-accent">{text}</button>
    )
}
