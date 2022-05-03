import { ChangeEventHandler } from "react";
import '../../styles/form/fields.css'

export const InputField = ({ name, type='text', placeholder='', text, onChange, value = undefined }: {
    name: string,
    type?: string,
    placeholder?: string,
    text: string,
    onChange: ChangeEventHandler,
    value?: string|number,
}) => {
    return(
        <div className="form-group">
            <label>{text}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    )
}

export const SubmitButton = ({text}: {text: string}) => {
    return(
        <button type="submit" className="btn submit-btn btn-accent">{text}</button>
    )
}

export const Select = ({text, name, options}: {
    text: string,
    name: string,
    options: {
        value: string,
        option: string,
        selected: boolean,
    }[]
}) => {
    return(
        <div className="form-group">
            <label>{text}</label>
            <select name={name}>
                {
                    options.map((op, i) => (
                        <option key={i} value={op.value} selected={op.selected}>{op.option}</option>
                    ))
                }
            </select>
        </div>
    )
}