import React from 'react'
import { Children } from 'react'

interface LabelProps {
    htmlFor: string,
    children: string,
    className: string

}


const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
    return (
        <label
            htmlFor={htmlFor} className={className}>
            {children}
        </label>
    )
}

export default Label;
