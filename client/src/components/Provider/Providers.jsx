import React from 'react'

import Footer from '../Footer';
import NavBar from '../NavBar';
import ProviderCards from './ProviderCards';

import styles from '../../styles/Providers/Providers.module.css'


const Providers = () => {

    return (
      <div>
        <NavBar noFilters />
        <div className={styles.container}>
          <h1 className={styles.h1}>Providers</h1>
          <ProviderCards />
        </div>
        <Footer />
      </div>
    );
};

export default Providers