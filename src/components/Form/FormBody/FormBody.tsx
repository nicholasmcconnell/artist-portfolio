import React from 'react'

import './FormBody.css'

interface FormProps {
    children: any,
    greeting1: string,
    greeting2?: string
}
const FormBody: React.FC<FormProps> = (props) => {

    const { children, greeting1, greeting2 } = props;
    return (
        <form className='form'>
            <div className="form-greeting">
                <h1 className='form-greeting-message'>{greeting1}</h1>
                <h1 className='form-greeting-message'>{greeting2}</h1>
            </div>
            {children}
        </form>
    )
}

export default FormBody;
