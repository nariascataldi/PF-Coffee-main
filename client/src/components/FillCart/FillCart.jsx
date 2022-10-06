import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetFillCart, putStock } from "../../redux/actions";

import Footer from "../Footer";
import NavBar from "../NavBar";
import { BsFillCartDashFill } from "react-icons/bs";
import { URL } from "../../config/Const";
import { reduceCart } from "../../utils/reduceCart";

import { ToastContainer, toast } from "react-toastify";

import "./FillCart.css";
import { Link } from "react-router-dom";

export default function FillCart() {
    const navigate = useNavigate();

    const { fillCart, userInit } = useSelector(state => state)

    const localStorageCart = JSON.parse(localStorage.getItem('carrito'))
    const dispatch = useDispatch()
    const usuarioIiniciado=JSON.parse(localStorage.getItem('Sign In')) 

    const reducedCart = reduceCart(fillCart)


    function onDelete(e) {
        dispatch(resetFillCart(e.id))
        toast("Product delete", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
    };

    //Mercado pago

    async function checkOut() {
        let mercadoPagoRes = await axios.post(URL + '/checkout', reducedCart);
        
        window.location.href = mercadoPagoRes.data;
    }
    //verifico que este registrado para efectuar el pago
    // const infoUser= JSON.parse(localStorage.getItem('ususrio-creado'));
    
    function handleButtonPay() {
        if(userInit.id){
            console.log('se ejecuto la accion de pag')
             reducedCart.forEach(elem =>
            dispatch(putStock(elem)))
        checkOut(reducedCart)
        } else {
            toast("You must log-in to buy", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
            )
            setTimeout(() => {
                navigate('/signin')
              }, 3000);
        }
    };

    let sumaTotal = 0
    for (let i = 0; i < fillCart.length; i++) {
        sumaTotal = sumaTotal + fillCart[i].price
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
                                <Link to={`/detail/${d.id}`}>
                                <div>

                                    <img src={d.image} className='card-img-top img' alt="Image product" />
                                </div>
                                </Link>
                                <div className='text-detail'>
                                    <div className='card-body'>
                                        <h1 className='card-title'>{d.title}</h1>
                                        <button className='delete-cart-btn' value={d} onClick={() => onDelete(d)}><BsFillCartDashFill
                                            className='cart-delete-icon' /> 
                                        </button>
                                        <ToastContainer />



                                    </div>
                                    <h2>$ {d.price}</h2>

                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item fondo'>Units: {d.quantity}</li>
                                        <li className='list-group-item fondo'>Diets: {d.diets?.map(e => e.name)}</li>
                                        <li className='list-group-item fondo'>Categories: {d.categories?.map(e => e.name)}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }) : <p> </p>
                    }
                </div>
                <div className='detail-cart-shop-total'>
                    <h3 className='title-fillcart'>Shopping detail :</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item fondo'>Products:
                            {reducedCart.length && reducedCart.map((e) => {
                                return (
                                    <p>  -{e.title} : $ {e.price}  {`( x ${e.quantity} u.)`}</p>
                                )
                            })}
                        </li>
                        <li className='list-group-item fondo'><h2>Total to pay: ${sumaTotal}</h2> </li>
                    </ul>
                    {fillCart.length ? 
                        <button className='pay-btn-cart' onClick={handleButtonPay}>Pay</button> :
                        <button className='pay-btn-cart-empty'>Pay</button>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}