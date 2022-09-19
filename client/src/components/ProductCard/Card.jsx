import React from "react";
import './Card.css';

export default function Card ({id,title,image,price}){
    return (
        <div className='card-container'>
            <p>{id}</p> 
            <img className='img-card' width={500} height={500} src={image}/>
            <h4 className='name-card'>{title}</h4>
              <p>$ {price}</p>   
        </div>  
    )
}