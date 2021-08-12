import React from 'react';
import { useForm } from '../../utils/useForm';

import './Form.css';

export const Form = () => {

    // const [login, setLogin] = useState({ email: '', password: '' });

    // const handleChange = (e: any) => {
    //     const { name, value } = e.target;

    //     setLogin({
    //         ...login, [name]: value
    //     })
    // }

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     console.log(login)
    // }

    const [state, handleChange] = useForm();

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <form >
            <input type="text" placeholder='Email' name='email' value={state.email || ''} onChange={handleChange} />
            <input type='password' placeholder='Password' name='password' value={state.password || ''} onChange={handleChange} />
            {/* <button style={{ color: 'black', width: "50px", height: '50px' }}>Register</button> */}
            <input type="submit" onClick={handleSubmit} />
        </form>

    )
}