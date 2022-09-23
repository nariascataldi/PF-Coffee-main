import React, { useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import { resetFillCart } from "../../redux/actions";
import Footer from "../Footer";
import NavBar from "../NavBar";
import './FillCart.css';


export default function FillCart (){

    const {fillCart} = useSelector(state=>state)
    // const {allProducts} = useSelector(state=>state);
    const localStorageCart = JSON.parse(localStorage.getItem('carrito'))
    const dispatch = useDispatch()
    
    function onDelete(id){
        dispatch(resetFillCart(id))
        console.log(id)
        alert('Product delete')
    }
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(fillCart));
      }, [fillCart]);
    


    return (
        <div className='fill-cart-wraper'>
            <NavBar noFilters/>
            <div className='cart-detailshop-container'>

            
            <div className='cart-container'>
                <h2 className='title-fillcart'>Shopping Cart</h2>
                <p>They are {fillCart.length? fillCart.length : 0 } products in your cart</p>
                {fillCart.length? fillCart.map(d=>{
                    return (
                        <div className='card-detail'>
                            
                            <div>
                            
                        <img src={d.image} className='card-img-top img' alt="Image product"/>
                    </div>               
                    <div className='text-detail'>
                        <div className='card-body'>
                        <h1 className='card-title'>{d.title}</h1>
                        <button className='delete-cart-btn' value={d.id} onClick={()=>onDelete(d.id)}> x </button>
                        
                        
                        </div>
                        <h2>$ {d.price}</h2>
                        
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item fondo'>Units: 1</li>
                                <li className='list-group-item fondo'>Stock: {d.stock}</li>
                                <li className='list-group-item fondo'>Diets: {d.diets?.map(e=>e.name)}</li>                          
                                <li className='list-group-item fondo'>Categories: {d.categories?.map(e=>e.name)}</li>
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
                                <li className='list-group-item fondo'>Units: {fillCart.length} </li>
                                <li className='list-group-item fondo'>Products:
                                {fillCart.length && fillCart.map((e)=>{
                                    return (
                                        <p>  -{e.title} : $ {e.price} (1)</p>
                                    )
                                })}
                                 </li>
                                <li className='list-group-item fondo'>Total a pagar:  </li>
                            </ul>
            </div>
            </div>
            <Footer/>
        </div>
    )
}