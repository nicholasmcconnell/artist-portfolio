import React from 'react'
import './Container.css';

export const Container = ({ children }: { children: any }) => {

    return (
        <div className='container'>
            {children}
        </div>
    )
}
