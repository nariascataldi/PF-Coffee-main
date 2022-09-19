import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

export default function Card ({id,title,image,price}){
    return (
      <Link to={`/detail/${id}`} className="link-card">
        <div className="card-container">
          <img className="img-card" width="500" height="500" src={image} />
          <h4 className="name-card">{title}</h4>
          <p>$ {price}</p>
        </div>
      </Link>
    );
}