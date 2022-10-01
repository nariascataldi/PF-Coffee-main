import React from "react";
import CardsOrders from "./CardsOrders";
import { useDispatch } from 'react-redux';
import { getOrder } from '../../../redux/actions/index.js';

export default function History() {
  const dispatch = useDispatch();
  React.useEffect(() => {

    dispatch(getOrder());
  }, [dispatch])

  return (
    <CardsOrders />
  )
}