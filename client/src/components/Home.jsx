import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filter, getAllDiets, getAllProducts  } from '../redux/actions';
import { getAllCategories, clearDetail } from "../redux/actions";

import NavBar from "./NavBar";
import Cards from './Cards';
import Footer from './Footer';
import styles from "../styles/Home.module.css";

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
    },[filterBy, allProducts]);

    useEffect(()=>{
        dispatch(getAllCategories());
    },[])

    useEffect(()=>{
        dispatch(getAllDiets());
    },[])


    return (
      <div className={styles.home_container}>
        <NavBar />
        <Cards />
        <Footer />
      </div>
    );
}