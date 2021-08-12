import { useState } from 'react';

export const useForm = () => {

    const [state, setState] = useState({});

    const handleChange = (e: any) => {
        const [name, value] = e.target;
        setState({ ...state, [name]: value })

    }
    return [state, handleChange];

}