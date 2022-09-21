import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import style from './Menu.module.css';

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
        <div className={style.menu_container ${menu ? "open" : ""}}> 
        <div className={style.box_menu1}>
        <p></p>
        </div>
        <div className={style.box_menu}>
            <Link to='/productAdmin'><button className={style.menubutton_crate_product}>Add a new product</button></Link>
        </div>
        <div className={style.box_menu}>
        <button className={style.menubutton_crate_product}>Add new Provider</button>
        </div>
        <div className={style.box_menu}>
        <button className={style.menubutton_crate_product}>Log in</button>
        </div>
    </div>)

}