import React, { useState } from 'react'

import FormContainer from '../FormContainer/FormContainer';
import Form from '../FormBody/FormBody';
import FormInputsDiv from '../FormInputsDiv/FormInputsDiv';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { useForm } from '../../../utils/useForm';
import FormSucces from '../FormSuccess/FormSuccess';


export default function FormLogin() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const sumbitForm = () => {
        console.log('TO BACK END ', state)
        setIsSubmitted(true);

    }
    const { state, handleChange, handleSubmit, errors } = useForm(sumbitForm);
    return (
        <>
            {!isSubmitted ?

                <FormContainer>
                    <Form greeting1={'Enter Login Info'}>
                        <FormInputsDiv>
                            <Label
                                htmlFor='username'
                            >
                                Username
                            </Label>
                            <Input
                                id='username'
                                type="text"
                                name='username'
                                placeholder='Enter your username'
                                value={state.username || ''}
                                onChange={handleChange}
                            />
                            {errors.username ? <p>{errors.username}</p> : undefined}

                            <Label
                                htmlFor='password'
                            >
                                Password
                            </Label>
                            <Input
                                id='password'
                                type='password'
                                name='password'
                                placeholder='Enter your password'
                                value={state.password || ''}
                                onChange={handleChange}
                            />
                            {errors.password ? <p>{errors.password}</p> : undefined}
                        </FormInputsDiv>

                        <Button
                            onClick={handleSubmit}
                            id={'login'}
                        >
                            Login
                        </Button>
                    </Form>
                </FormContainer>
                :
                <FormSucces />
            }
        </>
    )
}
