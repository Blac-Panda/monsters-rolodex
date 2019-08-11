import React from 'react'
import './card.css'

export const Card = props => (
    <div className="card-container">
        <img 
        alt="monster" 
        src={"https://robohash.org/${props.monster.key}?set=set2&size=180x180"} 
        />
        <p> {props.monster.name} </p>
        <p> {props.monster.email} </p>
    </div>
);