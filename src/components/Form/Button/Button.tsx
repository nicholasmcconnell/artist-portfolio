import React from 'react'

import './Button.css';

interface ButtonProps {
    className?: any,
    type: any,
    onClick: (e: any) => void
    // children: any
}

const Button: React.FC<ButtonProps> = (props) => {
    const { className, type, onClick, children } = props;
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
