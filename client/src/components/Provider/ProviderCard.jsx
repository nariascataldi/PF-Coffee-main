import React from 'react'

import styles from '../../styles/Providers/ProviderCard.module.css'


const ProviderCard = ({ name, mail, logo, adress, phone, CUIT }) => {

    return (
      <div className={styles.container}>
        <h1>{name}</h1>
        <img src={logo} alt={name} className={styles.image} />
        <div className={styles.text}>
          <p>Mail: {mail}</p>
          <p>Direccion: {adress}</p>
          <p>Telefono: {phone}</p>
          <p>CUIT: {CUIT}</p>
        </div>
      </div>
    );
};

export default ProviderCard