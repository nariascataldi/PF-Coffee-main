import React from 'react'

import styles from '../../styles/Providers/ProviderCard.module.css'


const ProviderCard = ({ name, mail, logo, adress, phone, CUIT }) => {

    return (
      <div className={styles.container}>
        <h1>{name}</h1>
        <img src={logo} alt={name} className={styles.image} />
        <div className={styles.text}>
          <p>
            <b>Mail:</b> {mail}
          </p>
          <p>
            <b>Direccion:</b> {adress}
          </p>
          <p>
            <b>Telefono:</b> {phone}
          </p>
          <p>
            <b>CUIT:</b> {CUIT}
          </p>
        </div>
      </div>
    );
};

export default ProviderCard