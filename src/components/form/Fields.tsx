import { ChangeEventHandler } from "react";
import '../../styles/form/fields.css'

export const InputField = ({ name, type='text', placeholder='', text, onChange, value = undefined, required=true }: {
    name: string,
    type?: string,
    placeholder?: string,
    text: string,
    onChange: ChangeEventHandler,
    value?: string|number,
    required?: boolean,
}) => {
    return(
        <div className="form-group">
            <label>{text}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} required={required}/>
        </div>
    )
}

export const SubmitButton = ({text}: {text: string}) => {
    return(
        <button type="submit" className="btn submit-btn btn-accent">{text}</button>
    )
}

export const Select = ({text, name, options, required=true}: {
    text: string,
    name: string,
    options: {
        value: string,
        option: string,
        selected: boolean,
    }[],
    required?: boolean,
}) => {
    return(
        <div className="form-group">
            <label>{text}</label>
            <select name={name} required={required}>
                {
                    options.map((op, i) => (
                        <option key={i} value={op.value} selected={op.selected}>{op.option}</option>
                    ))
                }
            </select>
        </div>
    )
}