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
    <div>
      {
        providers && providers.map(p => (
          <CardProvider key={p.id} name={p.name} mail={p.mail} logo={p.logo} adress={p.adress} phone={p.phone} CUIT={p.CUIT} disable={p.disable} id={p.id} />
        ))
      }
    </div>
  );
};

export default CardsProvider