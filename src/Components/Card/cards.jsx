import './cards.css';
import React from 'react';


export const Cards = (props) => {
    return (
    <div className={`card ${props.ClassName}` }>
        {props.children}
    </div>
    )
}