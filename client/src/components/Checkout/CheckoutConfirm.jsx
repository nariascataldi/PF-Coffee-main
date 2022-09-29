import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory,useParams, Link} from "react-router-dom";
import { cartEmptying } from "../../redux/actions";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { BsFillPatchCheckFill} from "react-icons/bs";
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

  useEffect (()=>{
      if(statusPago === 'approved'){
        console.log('status pago = ',statusPago)
        return dispatch(cartEmptying()) ; 
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
