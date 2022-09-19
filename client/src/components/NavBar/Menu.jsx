import React from 'react';
import { useDispatch, useSelector } from "react-redux";
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
        <div className='box-menu'>
        <p>Menu</p>
        </div>
        <div className='box-menu'>
        <p>Menu</p>
        </div>
        <div className='box-menu'>
            <p>Menu</p>
        </div>
        <div className='box-menu'>
        <p>Menu</p>
        </div>
        <div className='box-menu'>
        <p>Menu</p>
        </div>
    </div>)

}