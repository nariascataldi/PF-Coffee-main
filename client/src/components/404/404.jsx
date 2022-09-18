import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import imgNotFound from './img/404.jpg'
import './404.css'
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className='parent404'>
                <img src={imgNotFound} alt="notFound" className='imgNotFound'/>
                <h5 className='titleNotFound'>Esta página no esta disponible</h5>
                <Link to='/home'>Home</Link>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default NotFound