//este Landing será puesto en el Home como un componente más
import React from "react";
import { Link } from "react-router-dom";

// import Carousel from '../components/Carousel'
import styles from "../styles/LandingPage.module.css";

function LandingPage() {
  console.log("Bienvenidos")
  return (
    <div className={styles.LandingPage}>
      <div className={styles.home}>
        <Link to='/homeAdmin'>
          <button className={styles.button} id='button'>Coffee`s Orders</button>
        </Link>
      </div>
    </div>
  )
}
export default LandingPage;