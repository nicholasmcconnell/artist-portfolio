import React from 'react';
import { useForm } from '../../utils/useForm';
import { Container } from '../Container/Container';

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
        console.log(state);
    }

    return (
        <Container>

            <form >
                <input
                    className='text'
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={state.email || ''}
                    onChange={handleChange}
                />

                <input
                    className='text'
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={state.password || ''}
                    onChange={handleChange}
                />
                <input type="submit" onClick={handleSubmit} />

                {/* <button type="submit" onClick={handleSubmit} >Submit</button> */}
            </form>
        </Container>

    )
}