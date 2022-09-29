import React from "react";
import styles from './CardMail.module.css'

export default function CardMails ({mail, name, disable, id}){

    return (
        <div>
          <table className="table">
              <thead className="table-primary">
              <tr className="">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Mail</th>
                <th scope="col">State</th>
                <th scope="col">Send Newsletter</th>
                <th></th>
              </tr>
              </thead>
              
              <tbody>
                  <tr>
                    <th scope="row"> <p>{id}</p></th>
                    <td><p>{name}</p></td>
                    <td><p>{mail}</p></td>
                    {
                        disable === false ?
                        <td><p>Asset</p></td> :
                        <td><p>Inactive</p></td>
                    }
                    <td><input type="checkbox" /></td>
                   </tr>
              </tbody>
          </table>
        </div>
      );
}