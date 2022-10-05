import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {app, auth, signUp} from "../../firebase/index"
import './Menu.css';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { setUserInit } from '../../redux/actions';
import { useNavigate } from "react-router";

export default function Menu({ menu }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInit}= useSelector(state=>state)
    
    
    // function handleOnChange (e){
    //     dispatch(sortAtoZ(e.target.value))
    // }

    // const seasonactivities=activities;
    // const seasonSinDuplicado = []
    //  seasonSinDuplicado = [...new Set(seasonactivities)]
    //  console.log(seasonactivities);
    //  console.log(seasonSinDuplicado)
    const cerrarSesion = () => {
        signOut(auth)
         localStorage.setItem('usuario-creado',JSON.stringify(''));
        localStorage.setItem('Sign In',JSON.stringify(''));
        dispatch(setUserInit(''))
        alert('you logged out')
    
    

    }
    return (
        <div className={`menu-container ${menu ? "open" : ""}`}>

            {userInit?.status ==='Admin' &&
                <>
                <Link to='/homeAdmin'><button className='menubutton-crate-product'>Home Admin</button></Link>
                <Link to='/profileUser'><button className='menubutton-crate-product'>My Account</button></Link>
                </>
            }
            {
                userInit?.status === 'Client' &&
                <>
                <Link to='/profileUser'><button className='menubutton-crate-product'>My Account</button></Link>
                </>
            }
            

            {/* <Link to='/providerCreate'><button className='menubutton-crate-product'>Add new Provider</button></Link> */}

            
            {userInit.id?
                <button className='menubutton-crate-product' onClick={cerrarSesion}>Logout</button> :
                <Link to='/signin'><button className='menubutton-crate-product'>Log in</button></Link>
            }
            
            <Link to='/about'><button className='menubutton-crate-product'>About</button></Link>

        </div>)


}