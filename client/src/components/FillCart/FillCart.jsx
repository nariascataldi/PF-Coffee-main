import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFillCart } from "../../redux/actions";
import Footer from "../Footer";
import NavBar from "../NavBar";
import './FillCart.css';


export default function FillCart() {

    const { fillCart } = useSelector(state => state)
    // const {allProducts} = useSelector(state=>state);
    const localStorageCart = JSON.parse(localStorage.getItem('carrito'))
    const dispatch = useDispatch()


    function onDelete(id) {
        dispatch(resetFillCart(id))
        // console.log(id)
        alert('Product delete')
    }
    // reduceCart
    let quantities = {};

    for (let i = 0; i < fillCart.length; i++) {
        if (!quantities[fillCart[i].title]) quantities[fillCart[i].title] = 1;
        else quantities[fillCart[i].title]++;
    }

    //console.log(quantities); // { coffe: 2, yogurt: 1, sandwich: 2 }

    // luego armamos nuestro reducedCart

    let reducedCart = [];
    let quantitiesKeys = Object.keys(quantities);
    let found;

    for (let j = 0; j < quantitiesKeys.length; j++) {
        found = fillCart.find((product) => product.title === quantitiesKeys[j]);
        reducedCart.push({ ...found, quantity: quantities[quantitiesKeys[j]] });
    }

    console.log(reducedCart)




    //Mercado pago
    let ids = [];
    
    for (let i = 0; i < reducedCart.length; i++) {   
         ids.push({
            id: i.id
            })
        } 
        
    
    console.log(ids)
    async function checkOut() {
        let mercadoPagoRes = await axios.post('http://localhost:3001/checkout', reducedCart);
        console.log(mercadoPagoRes);
        window.open(mercadoPagoRes.data) 
        //window.location.href = mercadoPagoRes.data;
    }
    function handleButtonPay() {
        checkOut(reducedCart)
    }


    useEffect(() => {

        localStorage.setItem("carrito", JSON.stringify(fillCart));

    }, [fillCart]);



    return (
        <div className='fill-cart-wraper'>
            <NavBar noFilters />
            <div className='cart-detailshop-container'>


                <div className='cart-container'>
                    <h2 className='title-fillcart'>Shopping Cart</h2>
                    <p>They are {reducedCart.length ? reducedCart.length : 0} products in your cart</p>
                    {reducedCart.length ? reducedCart.map(d => {
                        return (
                            <div className='card-detail'>

                                <div>

                                    <img src={d.image} className='card-img-top img' alt="Image product" />
                                </div>
                                <div className='text-detail'>
                                    <div className='card-body'>
                                        <h1 className='card-title'>{d.title}</h1>
                                        <button className='delete-cart-btn' value={d.id} onClick={() => onDelete(d.id)}> x </button>


                                    </div>
                                    <h2>$ {d.price}</h2>

                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item fondo'>Units: {d.quantity}</li>
                                        <li className='list-group-item fondo'>Stock: {d.stock}</li>
                                        <li className='list-group-item fondo'>Diets: {d.diets?.map(e => e.name)}</li>
                                        <li className='list-group-item fondo'>Categories: {d.categories?.map(e => e.name)}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }) : <p> Clear</p>
                    }
                </div>
                <div className='detail-cart-shop-total'>
                    <h3 className='title-fillcart'>Shopping detail :</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item fondo'>Products:
                            {reducedCart.length && reducedCart.map((e) => {
                                return (
                                    <p>  -{e.title} : $ {e.price}  Unit: {e.quantity}</p>
                                )
                            })}
                        </li>
                        <li className='list-group-item fondo'>Total: </li>
                    </ul>
                    <button onClick={handleButtonPay}>Pay</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}