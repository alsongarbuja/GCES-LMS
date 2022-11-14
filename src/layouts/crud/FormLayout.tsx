import { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../styles/layout/crud/form.css'

const FormLayout = ({children, title, submitHandler, isEdit = false}: {
    children: JSX.Element,
    title: string,
    submitHandler: FormEventHandler,
    isEdit?: boolean,
}) => {

    const navigate = useNavigate();

  return (
    <main>
        <h2>{title}</h2>
        <div className="content-section">
            <form id='form' onSubmit={submitHandler}>
                {children}
            </form>
            <div className="form-footer">
                <button className="btn btn-dark" onClick={()=>navigate(-1)}>Go Back</button>
                <button className="btn btn-success" type="submit" form='form'>{isEdit?'Edit':'Create'}</button>
            </div>
        </div>
    </main>
  )
}

export default FormLayout