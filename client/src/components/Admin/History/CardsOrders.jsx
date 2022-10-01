import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrder } from '../../../redux/actions/index';
import Table from 'react-bootstrap/Table';

import CardOrder from './CardOrder';


const CardsOrders = () => {

  let dispatch = useDispatch();
  let orders = useSelector(state => state.order)
  useEffect(() => {
    dispatch(getOrder())
  }, [])
  console.log('CardsOrders orders: ',orders);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Username</th>
          <th>Date</th>
          <th>Detail</th>
          <th>Payment</th>
          <th>Paid</th>
          <th>Delivered</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {
          orders && orders?.map(order => (
            <CardOrder
              key={order.id}
              user={order.user}
              date={order.date}
              detail={order.detail}
              payment={order.payment}
              paid={order.paid}
              delivered={order.delivered}
              total={order.total}
            ></CardOrder>
          ))
        }
          {console.log({orders})}
      </tbody>
    </Table>
  );
};

export default CardsOrders;