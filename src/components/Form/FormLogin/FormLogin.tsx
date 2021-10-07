import React from 'react'
import FormContainer from '../FormContainer/FormContainer';
import Form from '../FormBody/FormBody';
import FormInputsDiv from '../FormInputsDiv/FormInputsDiv';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function FormLogin() {

    const handleSubmit = () => {
        console.log()
    }
    return (
        <>
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
                            value={'state'}
                            onChange={'handleChange'}
                        />
                        {'errors'}

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
                            value={'state'}
                            onChange={'handleChange'}
                        />
                        {'errors'}
                    </FormInputsDiv>

                    <Button
                        onClick={() => handleSubmit()}
                        id={'login'}
                    >
                        Login
                    </Button>
                </Form>
            </FormContainer>

        </>
    )
}
