import React from 'react'

import './FormBody.css'

interface FormProps {
    children: any,
}
const FormBody: React.FC<FormProps> = (props) => {

    const { children } = props;
    return (
        <form className='form'>
            <div className="form-greeting">
                <h1 className='form-greeting-message'>Get started with us today!</h1>
                <h1 className='form-greeting-message'>Create your account by filling out the information below.</h1>
            </div>
            {children}
        </form>
    )
}

export default FormBody;
