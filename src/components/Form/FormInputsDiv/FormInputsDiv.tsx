import React from 'react'

import './FormInputsDiv.css'

interface FormInputsDivProps {
    children: any
}

const FormInputsDiv: React.FC<FormInputsDivProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default FormInputsDiv
