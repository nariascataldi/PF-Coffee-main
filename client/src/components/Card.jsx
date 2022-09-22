import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/Card.module.css'


export default function Card({ id, title, image, price }) {
  return (
    <Link to={`/detail/${id}`} className={styles.link}>
      <div className={styles.card}>
        <img className={styles.img} src={image} />
        <h4 className={styles.name}>{title}</h4>
        <p>$ {price}</p>
      </div>
    </Link>
  );
}
