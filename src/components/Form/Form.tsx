import React, { useState } from 'react';

import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess/FormSuccess';
import FormContainer from './FormContainer/FormContainer';

import './Form.css';

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
