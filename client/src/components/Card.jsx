import React from "react";

export default function Card ({id,title,image,price}){
    return (
        <div className='container'>
            <p>{id}</p>
            <img className='img-card' src={image}/>
            <h4 className='name-country'>{title}</h4>
              <p>{price}</p>   
        </div>  
    )
}