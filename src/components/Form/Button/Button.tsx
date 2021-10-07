import React from 'react'

import './Button.css';

interface ButtonProps {
    className?: any,
    onClick?: (e: any) => void,
    id: string,
}

const Button: React.FC<ButtonProps> = (props) => {
    const { className, onClick, children, id } = props;
    return (
        <div
            className={'form-input-btn'}
            onClick={onClick}
            id={id}
        >
            {children}
        </div>
    )
}

export default Button;
