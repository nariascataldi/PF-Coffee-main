import React from 'react'
import './ProviderCard.css'

const ProviderCard = ({ name, mail, logo, adress, phone, CUIT }) => {

    return (
        <div className='providerCardContainer'>
            <h1>{name}</h1>
            <img src={logo} alt={name} />
            <p>mail: {mail}</p>
            <p>direccion: {adress}</p>
            <p>telefono: {phone}</p>
            <p>CUIT: {CUIT}</p>
        </div>
    );
};

export default ProviderCard