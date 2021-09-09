import React from 'react'

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
