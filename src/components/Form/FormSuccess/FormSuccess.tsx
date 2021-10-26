import React from 'react'

import './FormSuccess.css';

interface FormSuccesProps {
    user?: {},
}

const FormSucces: React.FC<FormSuccesProps> = ({ user }) => {
    console.log(user)
    return (
        // <div className="form-content-right">
        <div className="form-success">
            <h1>
                We have received your request!
            </h1>
            <img src="img/img-3.svg" alt="success" className="form-img-2" />
        </div>
        // </div>
    )
}

export default FormSucces;
