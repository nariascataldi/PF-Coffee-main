import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChat } from "react-icons/bs";

import { filter, getAllDiets, getAllProducts, getAllUsers } from '../redux/actions';
import { getAllCategories, clearDetail } from "../redux/actions";

import NavBar from "./NavBar";
import Cards from './Cards';
import Footer from './Footer';
import Oferts from './Oferts';
import Slides from "./Slides";

import Image2 from "../assets/coffee Order.jpg";
import Image3 from "../assets/hotSale.jpg";

import styles from "../styles/Home.module.css";

import Chat from './ChatBot/ChatBot';

export default function Home() {

    const images = [
        {
            src: Image2,
            title: "WELCOME!!",
        },
        {
            src: Image3,
            title: "Exclusive discount in online store.",
        },
    ];


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
        }, 1500)
        dispatch(clearDetail())
    }, [dispatch])
    useEffect(() => {
        dispatch(filter())
    }, [filterBy, allProducts]);

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllUsers());
        dispatch(getAllDiets());
    }, [])




    function handleClick(e) {
        e.preventDefault()
        setIsOpen(!isOpen)

    }

    return (
        <div className={styles.home_container}>
            <NavBar />
            <button className={styles.btn} onClick={(e) => handleClick(e)}><BsChat /></button>
            <Slides interval={5000} images={images} />
            <div className={styles.container}>
                {isOpen === true &&
                    <Chat className={styles.chat} />
                }
            </div>
            <Cards load={load} />
            <Footer />
        </div>
    );
}