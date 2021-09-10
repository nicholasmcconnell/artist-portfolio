import React, { useState } from 'react';

import FormSignup from './FormSignup/FormSignup';
import FormSuccess from './FormSuccess/FormSuccess';
import FormContainer from './FormContainer/FormContainer';

import './Form.css';

export const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }
    /* 
        1. CSS - from should be centereted horizontally on screent (check mobile view)
        2. everything in return statement should be placed in formSignup component. wrap it in a container and move submit form method and state to component as well.
    
    */
    return (
        <>
            <FormContainer>
                {!isSubmitted ?
                    <FormSignup submitForm={submitForm} />
                    :

                    <FormSuccess />
                }
            </FormContainer>
        </>
    )
}
