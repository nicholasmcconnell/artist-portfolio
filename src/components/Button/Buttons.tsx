import React, { Component } from 'react';
import { Interface } from 'readline';
import { isPropertyAccessChain, Type } from 'typescript';
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
    children: string,
    type?: any,
    onClick?: any,
    buttonStyle: string,
    buttonSize: any
}

export class Button extends Component<ButtonProps>{
    handleClick = () => {
        console.log("clicked")
    }
    render() {
        const { children, type, onClick, buttonStyle, buttonSize } = this.props;
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

        return (
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={this.handleClick}
                type={type}
            // buttonStyle={buttonStyle}
            >
                {children}
            </button>
        )
    }
}

// export Button;

// export const Button = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize
// }) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
//     const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
//     return (
//     )
//         <button
//             className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//             onClick={onClick}
//             type={type}
//         >
//             {children}
//         </button>
// };