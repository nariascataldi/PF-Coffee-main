import React from 'react'
import { Link } from "react-router-dom";

import Footer from './Footer';
import NavBar from './NavBar';

import imgNotFound from '../assets/404.jpg'
import styles from "../styles/404.module.css";



const NotFound = () => {

    return (
      <div className="contenedor">
        <div>
          <NavBar />
        </div>
        <div className={styles.parent404}>
          <img 
          className={styles.img}
          src={imgNotFound} 
          alt="notFound" 
          id="image" />
          <div className={styles.imgText}>
            <h5 className={styles.titleNotFound}>Parece que esta página no existe</h5>
            <Link 
            to="/home" 
            className={styles.homeButton}>
              <span>Ir a la página principal</span>
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


//className="img-responsive center-block d-block mx-auto"