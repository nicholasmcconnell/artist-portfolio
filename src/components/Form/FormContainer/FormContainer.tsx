import React from 'react'

import './FormContainer.css'

interface FormContainerProps {
    children: any
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
    return (
        <div className="form-container">
            <span className="close-btn">x</span>
            {children}
        </div>
    )
}

export default FormContainer
