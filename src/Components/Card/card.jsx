import './card.css';
import React from 'react';


const Card = (props) => {
    return (
    <div className={`card ${props.ClassName}` }>
        {props.children}
    </div>
    )
}

export default Card;