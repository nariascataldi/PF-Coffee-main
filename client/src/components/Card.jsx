import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/Card.module.css';
import image from '../assets/dedo.png';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeAtrib } from "../redux/actions";


export default function Card({ id, title, image, price }) {

  const dispatch = useDispatch();

  const [status, setStatus] = useState('on');

  const handleLike = () => {
    dispatch(changeAtrib('aggregateLikes', id, 1)) ;
    setStatus('off'); 
    console.log("se agrego un like y el producto a Favoritos");
  };

  return (
    <Link to={`/detail/${id}`} className={styles.link}>
      <div className={styles.card}>
        <img className={styles.img} src={image} />
        <h4 className={styles.name}>{title}</h4>
        <p>$ {price}</p>
        
        {
              (status === 'off') ? null :
              <div className={styles.likeContainer}>
                <div className={`${styles.likeCnt} ${styles.unchecked} `} >
                  <img src={image} height="30px" alt=""/>
                  <i className={`${styles.likeBtn} ${styles.materialIcons}`}>
                    <input  className={`${styles.unchecked} ${styles.likeBtn}`}
                                    value="LIKE"
                                    onClick={()=> handleLike()}
                                    type="button"/>
                  </i>
                </div>
            </div>
            }   
      </div>
    </Link>
  );
}
