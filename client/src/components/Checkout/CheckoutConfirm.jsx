import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory,useParams, Link} from "react-router-dom";
import { cartEmptying } from "../../redux/actions";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { BsFillPatchCheckFill} from "react-icons/bs";
import { reduceCart } from "../../utils/reduceCart";
import logo from '../../assets/logo_coffee.png'
import '../Checkout/Checkout.css'



export default function CheckoutConfirm (){
    const { fillCart } = useSelector((state) => state);
    const dispatch = useDispatch()
    const location = useLocation();
    const datosPago = location.search.split("&");
    console.log(datosPago)
      //ESTADO DE PAGO
  const status = datosPago[3].split("=");
  const statusPago = status[1];
    console.log('status ',status)
    console.log('status pago ',statusPago)
  //ID DE LA ORDEN
  const order = datosPago[4].split("=");
  const idOrder = order[1];

  console.log('order ',order)
  console.log('id order ',idOrder)
  //Detalle de la compra
  const reducedCart =reduceCart(fillCart)
  console.log('reduce.cart ',reducedCart)
  let sumaTotal = 0
    for(let i = 0; i < fillCart.length;i++){
        sumaTotal = sumaTotal + fillCart[i].price
    }

  useEffect (()=>{
      if(statusPago === 'approved'){
        console.log('status pago = ',statusPago)
          setTimeout(()=>{
            return dispatch(cartEmptying()) 
        },15000); 
      }
  },[]);
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(fillCart));
  }, [fillCart]);
  

    

    return (
        <div className='fill-cart-wraper'>
            
            <NavBar noFilters/>
            {statusPago==='approved'&& 
            <div >
                <div className='cart-container'>
                    <h1> Payment status:  " {statusPago} "  <BsFillPatchCheckFill className='icon-pay-approved'/></h1>
                    <div className='detail-cart-shop-approved'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item fondo'><h2>TICKET</h2></li>
                            <li className='list-group-item fondo'><h3>Products :</h3>
                                {reducedCart.length && reducedCart.map((e) => {
                                 return (
                                    <li className='list-group-item fondo'><p>  -{e.title} : $ {e.price}  {`( x ${e.quantity} u.)`}</p>
                                    </li>  
                                    )
                                })}
                            </li>
                            <li className='list-group-item fondo'><h2>Paid : ${sumaTotal}</h2> </li>
                        </ul>
                    </div>
                    <Link to='/'>
                    <button className='btn-statuspay-tohome'>Back to home</button>
                    </Link>
                </div>
            </div>
            }
            <Footer/>
        </div>
    )
}
