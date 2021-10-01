import React from 'react'

import './Button.css';

interface ButtonProps {
    className?: any,
    onClick?: (e: any) => void
    // children: any
}

const Button: React.FC<ButtonProps> = (props) => {
    const { className, onClick, children } = props;
    return (
        <div
            className={'form-input-btn'}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Button;
