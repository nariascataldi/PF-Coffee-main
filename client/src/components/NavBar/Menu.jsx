import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu({ menu }) {

    // function handleOnChange (e){
    //     dispatch(sortAtoZ(e.target.value))
    // }

    // const seasonactivities=activities;
    // const seasonSinDuplicado = []
    //  seasonSinDuplicado = [...new Set(seasonactivities)]
    //  console.log(seasonactivities);
    //  console.log(seasonSinDuplicado)
    return (
        <div className={`menu-container ${menu ? "open" : ""}`}>


            <Link to='/homeAdmin'><button className='menubutton-crate-product'>Home Admin</button></Link>

            <Link to='/providerCreate'><button className='menubutton-crate-product'>Add new Provider</button></Link>

            <Link to='/providers'><button className='menubutton-crate-product'>Provider</button></Link>

            <Link><button className='menubutton-crate-product'>Log in</button></Link>

            <Link to='/about'><button className='menubutton-crate-product'>About</button></Link>

        </div>)


}