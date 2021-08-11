import React, { Component } from 'react';
import { Interface } from 'readline';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
]

const SIZE = [
    'btn--medium',
    'btn--large',
]

interface ButtonProps {
    children?: string,
    type?: any,
    onClick?: any,
    buttonStyle?: any,
    buttonSize?: any
}

export const Button = (props: ButtonProps) => {
    const { children, type, onClick, buttonStyle, buttonSize } = props;
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (

        < button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`
            }
            onClick={onClick}
            type={type}
            style={buttonStyle}
        >
            {children}
        </button >
    )
};