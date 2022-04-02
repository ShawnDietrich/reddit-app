import './card.css';
import React from 'react';


export const Card = (props) => {
    return (
    <div className={`card ${props.ClassName}` }>
        {props.children}
    </div>
    )
}