import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChat } from "react-icons/bs";

import { filter, getAllDiets, getAllProducts, getAllUsers  } from '../redux/actions';
import { getAllCategories, clearDetail } from "../redux/actions";

import NavBar from "./NavBar";
import Cards from './Cards';
import Footer from './Footer';
import styles from "../styles/Home.module.css";

import Chat from './ChatBot/ChatBot';

export default function Home() {

    const dispatch = useDispatch();

    const { allProducts, filterBy } = useSelector(state => state);
    // para Loading
    const [load, setLoad] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
   
    useEffect(() => {
        setLoad(true);
        dispatch(getAllProducts());
        setTimeout(() => {
            setLoad(false)
        },1500)
        dispatch(clearDetail())
    }, [dispatch])
    useEffect(() => {
        dispatch(filter())
    }, [filterBy, allProducts]);

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllUsers());
        dispatch(getAllDiets());
    },[])

    


    function handleClick (e) {
        e.preventDefault()
        setIsOpen(!isOpen)

    }

    return (
        <div className={styles.home_container}>
            <NavBar />
            <Cards load={load} />
            <button className={styles.btn} onClick={(e)=>handleClick(e)}><BsChat/></button>
            <div className={styles.container}>
                {isOpen === true &&
                <Chat className={styles.chat}/>            
                }
            </div>
            <Footer />
        </div>
    );
}