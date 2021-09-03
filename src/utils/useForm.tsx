import { useState, useEffect } from 'react';

export const useForm = (callback: any, validate: any) => {

    const [state, setState] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


    const handleChange = (e: any) => {
        setState(({ ...state, [e.target.name]: e.target.value }));

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(validate(state))
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [errors]
    );

    return { state, handleChange, handleSubmit, errors };

}
