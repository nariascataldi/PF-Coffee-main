import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/index";
import CardsMyOrders from './CardsMyOrders.jsx'
import NavBar from "../NavBar";

export default function OrdersHistory() {

    let dispatch = useDispatch();

    let orders = useSelector(state => state.orders)

    React.useEffect(() => {
        dispatch(getAllOrders())
    },[])

    return (
        <div>
            <NavBar noFilters/>
            <h1>Orders</h1>
            {   !orders? <div><h1> You  do not have orders!!</h1></div>:
                orders && orders.map(o => (
                    <CardsMyOrders key={o.id} id={o.id} detail={o.detail} date={o.date} payment={o.payment} paid={o.paid} delivered={o.delivered} total={o.total}/>
                ))
            }
        </div>
    );
};