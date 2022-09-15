import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/index.js';
import Cards from '../Cards/Cards.jsx';
import Footer from '../Footer/Footer.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import './Home.css'

export default function Home(){

    const dispatch = useDispatch();

    let allProducts = useSelector(state => state.allProducts)

    React.useEffect(()=> {
        dispatch(getAllProducts());
    },[])

    return (
        <div className='home-container'>
            {console.log(allProducts)}
            <NavBar />
            <Cards/>
            <Footer />
        </div>
    )
}