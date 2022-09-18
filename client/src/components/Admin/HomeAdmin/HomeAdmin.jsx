import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
import CardsAdmin from '../CardsAdmin/CardsAdmin';

import './HomeAdm.css'

export default function HomeAdmin() {
  const dispatch = useDispatch();
  let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  return (
    <div className='home-container'>
      {console.log(allProducts)}
      <NavBarAdmin />
      <CardsAdmin />
    </div>
  )
}