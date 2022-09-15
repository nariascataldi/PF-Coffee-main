import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { getAllProducts } from '../../redux/actions';
import './Home.css'
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';


export default function Home() {

    
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('hola1');
        dispatch(getAllProducts());
        console.log('hola2');
    }, [])

    return (
        <div>
        
            <p>Este es el home</p>
            <div>
                <Cards />
            </div>
        </div>
    )
}