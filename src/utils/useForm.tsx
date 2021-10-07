import React from 'react';
import { useState, useEffect } from 'react';

import validateSignup from './validationSignup';

export const useForm = (callback: any, validate: any) => {

    const [state, setState] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // interface FormElements extends HTMLFormControlsCollection {
    //     username: HTMLInputElement
    // }

    // interface Input extends HTMLFormElement {
    //     readonly elements: FormElements
    // }

    const handleChange = (e: any) => {
        setState(({ ...state, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const id = e.target.id;
        if (id === 'signup') {
            console.log(state)
            console.log(e.target.id);
            setErrors(validateSignup(state));
        } else if (id === 'login') {
            console.log(state)
            console.log(e.target.id);
        }
        //not sure I need this piece of state
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                console.log('11111111111111111')
                callback();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [errors]
    );

    return { state, handleChange, handleSubmit, errors };

}
