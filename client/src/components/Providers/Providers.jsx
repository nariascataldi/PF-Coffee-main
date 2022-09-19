import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Providers.css'

const Providers = () => {

    return (
        <div>
            <NavBar />
                <div className='parentProvider'>
                    <h1>Provieders</h1> 
                </div>
            <Footer />
        </div>
    );
};

export default Providers