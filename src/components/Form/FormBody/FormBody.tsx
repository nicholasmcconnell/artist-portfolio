import React from 'react'

interface FormProps {
    children: any,
    // handleSubmit: () => void;
}
const FormBody: React.FC<FormProps> = (props) => {

    const { children } = props;
    return (
        <form className='form'>
            {children}
        </form>
    )
}

export default FormBody;
