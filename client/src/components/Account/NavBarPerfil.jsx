import React from "react";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';

function LandingPage() {
  console.log("Bienvenidos")
  return (
    <div className={styles.LandingPage}>
      <div className={styles.home}>
        <Link to='/about'>
          <button className={styles.button} id='button'>Coffee`s Orders</button>
        </Link>
      </div>
    </div>
  )
}
export default LandingPage;