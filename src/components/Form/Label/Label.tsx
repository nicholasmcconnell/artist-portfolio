import React from 'react';

import './Label.css';

interface LabelProps {
    htmlFor: string,
    children: string,
    className?: string

}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
    return (
        <label
            htmlFor={htmlFor} className={'form-label'}>
            {children}
        </label>
    )
}

export default Label;
