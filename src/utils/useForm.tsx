import { useState } from 'react';

export const useForm = (submitForm: any, validate: any) => {

    const [state, setState] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    // interface stateTypes {
    //     [key: string]: any
    // }

    const handleChange = (e: any) => {
        // const [name, value] = e.target;
        setState(({ ...state, [e.target.name]: e.target.value }));

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(validate(state))
        setIsSubmitting(true);
    }

    return [state, handleChange, handleSubmit, errors];

}