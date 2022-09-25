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
    error={ hasError: false, message: '' },
    success={ hasSuccess: false, message: '' },
    checked=false,
    isInline=false,
}: {
    name: string,
    type?: string,
    placeholder?: string,
    text: string,
    onChange: ChangeEventHandler,
    value?: string|number,
    required?: boolean,
    opt?: string,
    error?: {
        hasError: boolean,
        message: string
    },
    success?: {
        hasSuccess: boolean,
        message: string
    },
    checked?: boolean,
    isInline?: boolean,
}) => {
    return(
        <div className={`form-group ${opt}`}>
            <label style={{ display: isInline?'inline':'block' }}>{text}</label>
            <input 
                checked={checked} 
                className={`${error.hasError&&'input-error'}`} 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                onChange={onChange} 
                value={value} 
                required={required}
                style={{ width: isInline?'':'100%' }}
            />
            {error.hasError&&<p className="text-danger">{error.message}</p>}
            {success.hasSuccess&&<p className="text-success">{success.message}</p>}
        </div>
    )
}

export const SubmitButton = ({text, isLoading}: {text: string, isLoading: boolean}) => {
    return(
        <button disabled={isLoading} type="submit" className="btn submit-btn btn-accent">{text}</button>
    )
}

export const Select = ({text, name, options, required=true, value, onChange, opt=""}: {
    text: string,
    name: string,
    options: {
        value: string,
        option: string,
    }[],
    required?: boolean,
    value: string,
    opt?: string,
    onChange: ChangeEventHandler,
}) => {
    return(
        <div className={`form-group ${opt}`}>
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