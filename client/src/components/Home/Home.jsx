
import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, getAllDiets, getAllProducts  } from '../../redux/actions/index.js';
import { getAllCategories, clearDetail } from "../../redux/actions/index.js";

import NavBar from "../NavBar/NavBar.jsx";
import Cards from '../Cards/Cards.jsx';
import Footer from '../Footer/Footer.jsx';



import './Home.css'

export default function Home(){

    const dispatch = useDispatch();

    const {allProducts, filterBy }= useSelector(state => state);
    // para Loading
    const [load, setLoad] = useState(false);

    useEffect(()=> {
        setLoad(true);
        dispatch(getAllProducts());
        setTimeout(()=>{
            setLoad(false)
        },1000)
        dispatch(clearDetail())
    },[dispatch])
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
            <Cards  load={load}/>
            <Footer />
        </div>
    )
}