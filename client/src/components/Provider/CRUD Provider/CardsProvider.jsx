import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAllProviders } from '../../../redux/actions/index';

import CardProvider from './CardProvider';
import { useEffect } from 'react';

const CardsProvider = () => {

  let dispatch = useDispatch();

  let providers = useSelector(state => state.providers)
  console.log('los proveedores son: ', providers)
  useEffect(() => {
    dispatch(getAllProviders())
  }, [])

  return (
    <table className="table">
      <thead className="table-primary">
        <tr>
          <th></th>
          <th scope="col">Id</th>
          <th scope="col">Logo</th>
          <th scope="col">Name</th>
          <th scope="col">Mail</th>
          <th scope="col">Adress</th>
          <th scope="col">Phone</th>
          <th scope="col">CUIT</th>
          <th scope="col">State</th>
        </tr>
      </thead>
      {
        providers && providers.map(p => (
          <CardProvider key={p.id} name={p.name} mail={p.mail} logo={p.logo} adress={p.adress} phone={p.phone} CUIT={p.CUIT} disable={p.disable} id={p.id} />
        ))
      }
    </table>
  );
};

export default CardsProvider