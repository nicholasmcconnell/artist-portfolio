import React from 'react'
import { Link } from 'react-router-dom'

import './FormContainer.css'

interface FormContainerProps {
    children: any
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
    return (
        <div className="form-container">
            <span className="close-btn"><Link to='/' className='close-btn'>x</Link></span>
            {children}
        </div>
    )
}

export default FormContainer
