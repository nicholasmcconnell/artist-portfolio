import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSucces from './FormSucces';
import FormSuccess from './FormSucces';

export const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <div>
            {/* {!isSubmitted ?
                <FormSignup submitForm={submitForm} /> : <FormSuccess />} */}
            <FormSucces />
        </div>
    )
}
