import React, { useState } from 'react';

import FormSignup from './FormSignup';
import FormSuccess from './FormSucces';

import './Form.css';

export const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }
    console.log(typeof submitForm)
    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src="img/img-2.svg" alt="spaceship" className="form-img" />
                </div>
                {!isSubmitted ?
                    <FormSignup submitForm={() => submitForm()} />
                    :

                    <FormSuccess />
                }
            </div>
        </>
    )
}
