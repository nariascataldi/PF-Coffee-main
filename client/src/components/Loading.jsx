import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.spinner}>
        <Link 
        exact to="/" 
        className={styles.a}
        ><h1>🤪🚀</h1></Link>
      </div>
    </div>
  );
}