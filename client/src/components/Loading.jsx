import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Loading.module.css";


export default function Loading() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.spinner}>

      <h1>☕️</h1>
        {/* <h1>🤪🚀</h1> */}

      </div>
    </div>
  );
}

//instalar react-player
// import coffee from '../assets/Coffee.mp4'
// import ReactPlayer from 'react-player';

//         <ReactPlayer
//           playing
//           loop
//           url={coffee}
//           onError={() => console.log('onError callback')}
//           width='100%'
//           height='100%'
//         />
