import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions";

export default function CardOrders({id, date, detail, payment, paid, delivered, total}) {

    let dispatch = useDispatch();

    const [openDetail, setOpenDetail] = useState(false);
    const [idProduct, setIdProduct] = useState([]);
    let products = useSelector(state => state.products)

    React.useEffect(() => {
        console.log(openDetail)
    },[openDetail])

    React.useEffect(() => {
        console.log(idProduct)
        console.log(openDetail)
    },[idProduct])

    React.useEffect(() => {
        dispatch(getAllProducts())
        console.log(detail)
    },[])

    const handleClick = async (e) => {
        await setOpenDetail(!openDetail)
        if(openDetail) {
            for (let z=0; z<detail.length; z++) {
                for (let i=0; i<products.length; i++) {
                    if(detail[z][0].includes(products[i].title)) {
                        setIdProduct([...idProduct, products[i].id])
                    }
                }
            }
        }
        else {
           await setIdProduct([])
        }
    } 

    return (
        <div>
        <table className="table">
            <thead className="table-primary">
            <tr>
                <th className="centrado">id</th>
                <th className="centrado">date</th>
                <th className="centrado" onClick={(e) => handleClick(e)} style={{cursor:'pointer', color:'blue'}}>detail</th>
                <th className="centrado">payment</th>
                <th className="centrado">paid</th>
                <th className="centrado">delivered</th>
                <th className="centrado">total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="centrado"><p>{id}</p></td>
                <td className="centrado">{date}</td>
                <td className="centrado"></td>
                <td className="centrado">{payment}</td>
                <td className="centrado">{paid}</td>
                {
                delivered === false ?
                    <td><p>True</p></td> :
                    <td><p>False</p></td>
                }
                <td className="centrado">${total}</td>
            </tr>
            </tbody>
        </table>
        {
            openDetail && (
                <h1>open</h1>
            )
        }
        </div>
    );
};