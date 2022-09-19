import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProviderCards from '../ProviderCards/ProviderCards';
import './Providers.css'

const Providers = () => {

    return (
        <div>
            <NavBar />
                <div className='parentProvider'>
                    <h1>Provieders</h1> 
                    <ProviderCards />
                </div>
            <Footer />
        </div>
    );
};

export default Providers