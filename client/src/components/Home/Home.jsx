import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/index.js';
import Footer from '../Footer/Footer.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import './Home.css'

export default function Home(){
    const dispatch = useDispatch();

    React.useEffect(()=> {
        dispatch(getAllProducts());
    },[])

    return (
        <div>
            <NavBar />
            <p>Este es el home</p>
            <Footer />
        </div>
    )
}