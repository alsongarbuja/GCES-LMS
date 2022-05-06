import { ChangeEventHandler } from "react";
import '../../styles/form/fields.css'

export const InputField = ({ 
    name, 
    type='text', 
    placeholder='', 
    text, 
    onChange, 
    value = undefined, 
    required=true,
    opt='', 
}: {
    name: string,
    type?: string,
    placeholder?: string,
    text: string,
    onChange: ChangeEventHandler,
    value?: string|number,
    required?: boolean,
    opt?: string,
}) => {
    return(
        <div className={`form-group ${opt}`}>
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

export const Select = ({text, name, options, required=true, value, onChange}: {
    text: string,
    name: string,
    options: {
        value: string,
        option: string,
    }[],
    required?: boolean,
    value: string,
    onChange: ChangeEventHandler,
}) => {
    return(
        <div className="form-group">
            <label>{text}</label>
            <select name={name} required={required} value={value} onChange={onChange}>
                {
                    options.map((op, i) => (
                        <option key={i} value={op.value}>{op.option}</option>
                    ))
                }
            </select>
        </div>
    )
}