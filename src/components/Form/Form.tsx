import React, { useState } from 'react';
import useForm from 'react-hook-form';

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

    return (
        <form>
            {/* <input type="text" placeholder='Email' name='email' value={login.email} onChange={handleChange} />
            <input type='password' placeholder='Password' name='password' value={login.password} onChange={handleChange} /> */}
            <input type="text" placeholder='Email' name='email' />
            <input type='password' placeholder='Password' name='password' />
            <input type="submit" />
        </form>

    )
}