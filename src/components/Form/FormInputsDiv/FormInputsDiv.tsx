import React from 'react'

import './FormInputsDiv.css'

interface FormInputsDivProps {
    children: any
    className?: string
}

const FormInputsDiv: React.FC<FormInputsDivProps> = ({ children, className }) => {
    return (
        <div className={'form-inputs'}>
            {children}
        </div>
    )
}

export default FormInputsDiv
