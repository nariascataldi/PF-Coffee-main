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
                <img src={imgNotFound} alt="notFound" className='img-responsive center-block d-block mx-auto' id='image'/>
                <div className='imgText'>
                    <h5 className='titleNotFound'>Parece que esta página no existe</h5>
                    <Link to='/home' className='homeButton'>
                        <span>
                            Ir a la página principal
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default NotFound