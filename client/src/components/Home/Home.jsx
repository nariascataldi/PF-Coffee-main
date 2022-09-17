
import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, getAllDiets, getAllProducts  } from '../../redux/actions/index.js';
import Cards from '../Cards/Cards.jsx';
import Footer from '../Footer/Footer.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import {getAllCategories} from '../../redux/actions/index.js';
import './Home.css'

export default function Home(){

    const dispatch = useDispatch();

    const {allProducts, filterBy }= useSelector(state => state)

    useEffect(()=> {
        dispatch(getAllProducts());
    },[])
    useEffect(()=>{
        dispatch(filter())
    },[filterBy,allProducts]);

    useEffect(()=>{
        dispatch(getAllCategories());
    },[])

    useEffect(()=>{
        dispatch(getAllDiets());
    },[])


    return (
        <div className='home-container'>
            <NavBar />
            <Cards/>
            <Footer />
        </div>
    )
}