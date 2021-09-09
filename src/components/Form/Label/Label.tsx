import React from 'react'
import { Children } from 'react'

interface LabelProps {
    htmlFor: string,
    children: string

}


const Label: React.FC<LabelProps> = (props) => {
    const { htmlFor, children } = props;
    return (
        <label
            htmlFor={htmlFor} className="form-label">
            {children}
        </label>
    )
}

export default Label;
