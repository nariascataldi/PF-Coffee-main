import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import styles from "../../../styles/Admin/NavBarAdm.module.css";


const NavBar = () => {
  return (
    <div className={styles.navBar}>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="nav-link active" to="/">Home Client</Link>
        </div>
      </div>
    </nav>
</div>
  );
};

export default NavBar;