import React from 'react'

interface InputProps {
    id: any,
    type: string,
    name: string,
    className: string,
    placeholder: string,
    value: string,
    onChange: any
}
const Input: React.FC<InputProps> = ({ id, type, name, className, placeholder, value, onChange }) => {

    // const { id, type, name, className, placeholder, value, onChange } = props;

    return (
        <>
            <input
                id={id}
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
            />
        </>
    )
}

export default Input;
