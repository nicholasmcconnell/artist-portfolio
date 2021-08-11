import React from 'react';
import useForm from 'react-hook-form';

import './Form.css';

export const Form = () => {
    return (
        <form>
            <input type="text" placeholder='Email' name='email' />
            <input type='password' placeholder='Password' name='password' />
            <input type="submit" />
        </form>

    )
}