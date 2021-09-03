import React from 'react'
import { useForm } from '../../utils/useForm';
import validate from './validationInfo';
import './Form.css';

interface UseFormProps {
    submitForm: () => void;
}


const FormSignup: React.FC<UseFormProps> = (props) => {

    const { submitForm } = props;

    const { state, handleChange, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} >
                <div className="form-greeting">
                    <h1 className='form-greeting-message'>Get started with us today!</h1>
                    <h1 className='form-greeting-message'>Create your account by filling out the information below.</h1>
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        id='username'

                        type="text"
                        name="username"
                        className="form-input"
                        placeholder='Enter your username'
                        value={state.username || ''}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label
                        htmlFor="email" className="form-label">
                        Email

                    </label>
                    <input
                        id='email'
                        type="text"
                        name="email"
                        className="form-input"
                        placeholder='Enter your email'
                        value={state.email || ''}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}

                </div>

                <div className="form-inputs">
                    <label
                        htmlFor="password" className="form-label">
                        Password

                    </label>
                    <input
                        id='password'
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder='Enter your password'
                        value={state.password || ''}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}

                </div>

                <div className="form-inputs">
                    <label
                        htmlFor="password2" className="form-label">
                        Confirm Password

                    </label>
                    <input
                        id='password2'
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder='Re-enter your password'
                        value={state.password2 || ''}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}

                </div>
                <button
                    className="form-input-btn"
                    type='submit'
                >
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
