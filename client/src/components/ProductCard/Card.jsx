import React from "react";
import './Card.css';

export default function Card ({id,title,image,price}){
    return (
        <div className='card-container'>
            <p>{id}</p>
            <img className='img-card' src={image}/>
            <h4 className='name-card'>{title}</h4>
              <p>$ {price}</p>   
        </div>  
    )
}