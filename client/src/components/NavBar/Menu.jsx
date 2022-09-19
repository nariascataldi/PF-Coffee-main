import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu({menu}){

    // function handleOnChange (e){
    //     dispatch(sortAtoZ(e.target.value))
    // }

    // const seasonactivities=activities;
    // const seasonSinDuplicado = []
    //  seasonSinDuplicado = [...new Set(seasonactivities)]
    //  console.log(seasonactivities);
    //  console.log(seasonSinDuplicado)
    return  (
        <div className={`menu-container ${menu ? "open" : ""}`}> 
        <div className='box-menu1'>
        <p></p>
        </div>
        <div className='box-menu'>
            <Link to='/productAdmin'><button className='menubutton-crate-product'>Add a new product</button></Link>
        </div>
        <div className='box-menu'>
         <Link to='/providerCreate'><button className='menubutton-crate-product'>Add new Provider</button></Link>
        </div>
        <div className='box-menu'>
        <Link to='/providerCreate'><button className='menubutton-crate-product'>Log in</button></Link>
        </div>
    </div>)

}