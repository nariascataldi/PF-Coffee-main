import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { getAllProducts } from '../../../redux/actions/index';
import CardUser from './CardUser';


const CardsUsers = () => {

  let dispatch = useDispatch();
  let products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <Table striped bordered hover size="sm">

      <thead>
        <tr>
          <th>Date</th>
          <th>Username</th>
          <th>Order</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map(p => (
            <CardUser
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              stock={p.stock}
            ></CardUser>
          ))
        }
      </tbody>
    </Table>
  );
};

export default CardsUsers;