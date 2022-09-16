import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

export default function Card ({id,title,image,price}){
    return (
        <Link to={`/detail/${id}`}>
        <div className='card-container'>
            
            <img className='img-card' src={image}/>
            <h4 className='name-card'>{title}</h4>
              <p>{price}</p>   
        </div> 
         </Link>
    )
}