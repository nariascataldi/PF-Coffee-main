import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/actions";
import CardOrders from './CardOrders.jsx'

export default function OrdersHistory() {

    let dispatch = useDispatch();

    let orders = useSelector(state => state.orders)

    React.useEffect(() => {
        dispatch(getAllOrders())
    },[])

    return (
        <div>
            <h1>Orders</h1>
            {
                orders && orders.map(o => (
                    <CardOrders key={o.id} id={o.id} detail={o.detail} date={o.date} payment={o.payment} paid={o.paid} delivered={o.delivered} total={o.total}/>
                ))
            }
        </div>
    );
};