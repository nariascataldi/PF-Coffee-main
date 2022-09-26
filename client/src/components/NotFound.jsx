import React from 'react'
import { Link } from "react-router-dom";

import Footer from './Footer';
import NavBar from './NavBar';

import imgNotFound from '../assets/404.jpg'
import styles from "../styles/notFound.module.css";



const NotFound = () => {

    return (
      <div className={styles.container}>
        <div>
          <NavBar />
        </div>
        <div className={styles.parent404}>
          <img src={imgNotFound} alt="notFound" className={styles.img}/>
          <div className={styles.imgText}>
            <h3 className={styles.titleNotFound}>Parece que esta página no existe</h3>
            <Link 
            to="/" 
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