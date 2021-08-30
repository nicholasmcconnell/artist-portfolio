import { useState } from 'react';

export const useForm = () => {

    const [state, setState] = useState<any>({});

    const [errors, setErrors] = useState<any>({});

    // interface stateTypes {
    //     [key: string]: any
    // }

    const handleChange = (e: any) => {
        // const [name, value] = e.target;
        setState(({ ...state, [e.target.name]: e.target.value }));

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return [state, handleChange, handleSubmit];

}