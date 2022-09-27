import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { filter, getAllDiets, getAllProducts  } from '../redux/actions';
import { getAllCategories, clearDetail } from "../redux/actions";
import { setToken, getToken, deleteToken, initAxiosInterceptor } from '../hooks/functionsToken';

import NavBar from "./NavBar";
import Cards from './Cards';
import Footer from './Footer';
import styles from "../styles/Home.module.css";

// initAxiosInterceptor();

export default function Home(){

    const dispatch = useDispatch();

    const {allProducts, filterBy }= useSelector(state => state);
    // para Loading
    const [load, setLoad] = useState(false);
    const [session, setSession] = useState(true);
    const [user, setUser] = useState('');

    useEffect(()=> {
        setLoad(true);
        dispatch(getAllProducts());
        setTimeout(()=>{
            setLoad(false)
        },2000)
        dispatch(clearDetail())
    },[dispatch])
    useEffect(()=>{
        dispatch(filter())
    },[filterBy, allProducts]);

    useEffect(()=>{
        dispatch(getAllCategories());
    },[dispatch])
  
    useEffect(()=>{
        dispatch(getAllDiets());
    },[dispatch])

    useEffect(()=>{
        let ls = localStorage.getItem('token');
             console.log(ls);
        // async function loadUser() {            
        //     if (!getToken()) {
        //         setSession(false);
        //         return;
        //     }
        //     try {
        //         // const user = await useUser();
        //         // setUser(user);
        //         setSession(false);
        //     } catch (error) { console.log(error) }
        // }
        // loadUser();
        
    },[])


    return (
      <div className={styles.home_container}>
        <NavBar />
        <Cards load={load} />
        <Footer />
      </div>
    );
}