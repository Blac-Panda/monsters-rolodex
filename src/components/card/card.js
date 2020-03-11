import React from 'react'
import './card.css'

const Card = ({name, email, id}) => (
    <div className="card-container">
        <img 
        alt="monster" 
        src={`https://robohash.org/${id}?size=180x180`} 
        />
        <p> {name} </p>
        <p> {email} </p>
    </div>
);

export default Card;