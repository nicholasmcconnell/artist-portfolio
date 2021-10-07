import React from 'react';
import { useState, useEffect } from 'react';

import validateSignup from './validationSignup';
import validateLogin from './validationLogin';

export const useForm = (submitForm: any) => {

    const [state, setState] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: any) => {
        setState(({ ...state, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const id = e.target.id;
        if (id === 'signup') {
            setErrors(validateSignup(state));
        } else if (id === 'login') {
            setErrors(validateLogin(state));
        }
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                submitForm();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [errors]
    );

    return { state, handleChange, handleSubmit, errors };

}
