import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/index"
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';

import { setUserInit } from '../../redux/actions';
import { ToastContainer, toast } from "react-toastify";

import "./Menu.css";


export default function Menu({ menu }) {
    const dispatch = useDispatch()
    const {userInit}= useSelector(state=>state)
    
    const cerrarSesion = () => {
        signOut(auth)
         localStorage.setItem('usuario-creado',JSON.stringify(''));
        localStorage.setItem('Sign In',JSON.stringify(''));
        dispatch(setUserInit(''))
        toast("You logged out", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    
    }
    return (
        <div className={`menu-container ${menu ? "open" : ""}`}>

            {userInit?.status ==='Admin' &&
                <>
                <Link to='/homeAdmin'><button className='menubutton-crate-product'>Home Admin</button></Link>
                <Link to='/providers'><button className='menubutton-crate-product'>Provider</button></Link>
                </>
            }

            

            {/* <Link to='/providerCreate'><button className='menubutton-crate-product'>Add new Provider</button></Link> */}

            
            {userInit.id?
                <div>
                <button className='menubutton-crate-product' onClick={cerrarSesion}>Logout</button> 
                <Link to='/myorders'><button className='menubutton-crate-product'>My Orders</button></Link>
                </div>:
                <Link to='/signin'><button className='menubutton-crate-product'>Log in</button><ToastContainer/></Link>
               
            }
            
            <Link to='/about'><button className='menubutton-crate-product'>About</button></Link>

        </div>)


}