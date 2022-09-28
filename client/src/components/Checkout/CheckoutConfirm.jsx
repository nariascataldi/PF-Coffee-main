import React, { useEffect, useState } from "react";
import { useLocation, useHistory} from "react-router-dom";



export default function CheckoutConfirm (){
    const location = useLocation();
    const datosPago = location.search
    console.log(datosPago)

    return (
        <div><h1> Estado de Pago:</h1></div>
    )
}
