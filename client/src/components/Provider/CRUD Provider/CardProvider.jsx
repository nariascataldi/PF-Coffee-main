import React from "react";
import { Link } from "react-router-dom";
import styles from '../../../styles/NavBar.module.css';


const ProviderCard = ({ name, mail, logo, adress, phone, CUIT, disable, id }) => {


  return (
    <tbody>
      <tr>
        <td><Link to={`/modProvider/${id}`}><button type="button" className={styles.buttonPrice} >modify</button></Link></td>
        <td scope="row"> <p>{id}</p></td>
        <td><img src={logo} alt={name} width='70 vw' /></td>
        <td><p>{name}</p></td>
        <td><p>{mail}</p></td>
        <td><p>{adress}</p></td>
        <td><p>{phone}</p></td>
        <td><p>{CUIT}</p></td>
        {
          disable === false ?
            <td><p>Asset</p></td> :
            <td><p>Inactive</p></td>
        }
      </tr>

    </tbody>
  );
};

export default ProviderCard

