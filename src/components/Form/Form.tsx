import React, { useState } from 'react';

import FormSignup from './FormSignup';
import FormSuccess from './FormSucces';

import './Form.css';
import FormContainer from './FormContainer/FormContainer';

export const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <>
            <FormContainer>
                <span className="close-btn">x</span>

                {!isSubmitted ?
                    <FormSignup submitForm={submitForm} />
                    :

                    <FormSuccess />
                }
            </FormContainer>
        </>
    )
}
