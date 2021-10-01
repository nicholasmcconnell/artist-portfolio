import React from 'react';

import './Input.css';

interface InputProps {
    id: any,
    type: string,
    name: string,
    className?: string,
    placeholder: string,
    value: string,
    onChange: any
}
const Input: React.FC<InputProps> = ({ id, type, name, className, placeholder, value, onChange }) => {

    return (
        <>
            <input
                id={id}
                type={type}
                name={name}
                className={'form-input'}
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
            />
        </>
    )
}

export default Input;
