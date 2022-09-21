import React from "react";  
import NavBar from "../NavBar/NavBar";
import './FillCart.css';


export default function fillCart (){
    
    return (
        <div className='fill-cart-wraper'>
            <NavBar/>
            <div className='cart-container'>
                <p>Este es el carrito</p>
            </div>
        </div>
    )
}