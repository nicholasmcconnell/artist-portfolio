import React, { useState } from 'react'

import Form from '../FormBody/FormBody';
import { useForm } from '../../../utils/useForm';

import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import FormInputsDiv from '../FormInputsDiv/FormInputsDiv';

import './FormSignup.css';
import { Link } from 'react-router-dom';
import FormContainer from '../FormContainer/FormContainer';
import FormSucces from '../FormSuccess/FormSuccess';

// interface UseFormProps {
//     submitForm: () => void;
// }

const FormSignup = () => {


    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        console.log('TO BACK END', state)
        setIsSubmitted(true);
    }

    const { state, handleChange, handleSubmit, errors } = useForm(submitForm);
    return (
        <>
            {!isSubmitted ?
                <FormContainer>
                    <Form greeting1={'Get started with us today!'} greeting2={'Create your account by filling out the information below.'}>
                        <FormInputsDiv>
                            <Label
                                htmlFor='username'
                            >
                                Username
                            </Label>
                            <Input
                                id='username'
                                type="text"
                                name="username"
                                placeholder='Enter your username'
                                value={state.username}
                                onChange={handleChange}
                            />
                            {errors.username ? <p>{errors.username}</p> : undefined}
                        </FormInputsDiv>

                        <FormInputsDiv className='form-inputs'>
                            <Label
                                htmlFor="email"
                            >
                                Email
                            </Label>
                            <Input
                                id='email'
                                type="text"
                                name="email"
                                placeholder='Enter your email'
                                value={state.email || ''}
                                onChange={handleChange}
                            />
                            {errors.email ? <p>{errors.email}</p> : undefined}
                        </FormInputsDiv>

                        <FormInputsDiv className='form-inputs'>
                            <Label
                                htmlFor="password"
                            >
                                Password
                            </Label>
                            <Input
                                id='password'
                                type="password"
                                name="password"
                                placeholder='Enter your password'
                                value={state.password || ''}
                                onChange={handleChange}
                            />
                            {errors.password ? <p>{errors.password}</p> : undefined}
                        </FormInputsDiv>

                        <FormInputsDiv className='form-inputs'>
                            <Label
                                htmlFor="password2"
                            >
                                Confirm Password

                            </Label>
                            <Input
                                id='password2'
                                type="password"
                                name="password2"
                                placeholder='Re-enter your password'
                                value={state.password2 || ''}
                                onChange={handleChange}
                            />
                            {errors.password2 ? <p>{errors.password2}</p> : undefined}
                        </FormInputsDiv>

                        <Button
                            onClick={handleSubmit}
                            id={'signup'}
                        >
                            Sign Up
                        </Button>

                        <span className="form-input-login">
                            Already have an account? Login <Link to='/login'>here</Link>
                        </span>
                    </Form>
                </FormContainer>
                :
                <FormSucces />
            }
        </>
    )
}

export default FormSignup
