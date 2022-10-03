import React from "react";
import { Link } from "react-router-dom";


const ProviderCard = ({ name, mail, logo, adress, phone, CUIT, disable, id }) => {


  return (
    <tbody>
      <tr>
        <th scope="row"> <p>{id}</p></th>
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
        <td><Link to={`/modProvider/${id}`}><button type="button" className="btn btn-outline-primary">modify</button></Link></td>
      </tr>

    </tbody>
  );
};

export default ProviderCard

