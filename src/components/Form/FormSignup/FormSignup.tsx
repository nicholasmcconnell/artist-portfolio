import React, { useState } from 'react'

import Form from '../FormBody/FormBody';
import { useForm } from '../../../utils/useForm';
import validate from '../../../utils/validationInfo';

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
        setIsSubmitted(true);
    }

    const { state, handleChange, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <>
            {!isSubmitted ?
                <FormContainer>
                    <Form>
                        <FormInputsDiv className='form-inputs'>
                            <Label
                                htmlFor='username'
                                className="form-label"
                            >
                                Username
                            </Label>
                            <Input
                                id='username'
                                type="text"
                                name="username"
                                className="form-input"
                                placeholder='Enter your username'
                                value={state.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
                        </FormInputsDiv>

                        <FormInputsDiv className='form-inputs'>
                            <Label
                                htmlFor="email"
                                className="form-label"
                            >
                                Email
                            </Label>
                            <Input
                                id='email'
                                type="text"
                                name="email"
                                className="form-input"
                                placeholder='Enter your email'
                                value={state.email || ''}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </FormInputsDiv>

                        <FormInputsDiv className='form-inputs'>
                            <Label
                                htmlFor="password"
                                className="form-label"
                            >
                                Password
                            </Label>
                            <Input
                                id='password'
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder='Enter your password'
                                value={state.password || ''}
                                onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </FormInputsDiv>

                        <FormInputsDiv className='form-inputs'>
                            <Label
                                htmlFor="password2"
                                className="form-label"
                            >
                                Confirm Password

                            </Label>
                            <Input
                                id='password2'
                                type="password"
                                name="password2"
                                className="form-input"
                                placeholder='Re-enter your password'
                                value={state.password2 || ''}
                                onChange={handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </FormInputsDiv>

                        <Button
                            className='form-input-btn'
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>

                        <span className="form-input-login">
                            Already have an account? Login <Link to='/'><a href='#'>here</a></Link>
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
