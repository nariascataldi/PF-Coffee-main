import React from "react";  
import { useSelector } from "react-redux";
import Footer from "../Footer";
import NavBar from "../NavBar";
import './FillCart.css';


export default function fillCart (){

    // const {allProducts} = useSelector(state=>state);
    const localStorageCart = JSON.parse(localStorage.getItem('carrito'))
    console.log (localStorageCart)

    return (
        <div className='fill-cart-wraper'>
            <NavBar/>
            <div className='cart-container'>
                <h2>Este es el carrito</h2>
                <p>Hay {localStorageCart.length? localStorageCart.length : 0 } productos en tu carrito</p>
                {localStorageCart.length? localStorageCart.map(d=>{
                    return (
                        <div className='card-detail'>
                            
                            <div>
                            
                        <img src={d[0].image} className='card-img-top img' alt="Image product"/>
                    </div>               
                    <div className='text-detail'>
                        <div className='card-body'>
                        <h1 className='card-title'>{d[0].title}</h1>
                        <h3>$ {d[0].price}</h3>
                        </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item fondo'>{d[0].description}</li>
                                <li className='list-group-item fondo'>Like: {d[0].like}</li>
                                <li className='list-group-item fondo'>Stock: {d[0].stock}</li>
                                <li className='list-group-item fondo'>Diets: {d[0].diets?.map(e=>e.name)}</li>                          
                                <li className='list-group-item fondo'>Categories: {d[0].categories?.map(e=>e.name)}</li>
                            </ul>
                    </div>
                        </div>
                    )
                }) : <p> Tu carrito está vacío</p>  
            }
            </div>
            <Footer/>
        </div>
    )
}