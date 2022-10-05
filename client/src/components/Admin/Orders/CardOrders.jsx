import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions";

export default function CardOrders({id, date, detail, payment, paid, delivered, total}) {

    let dispatch = useDispatch();

    const [openDetail, setOpenDetail] = useState(true);
    const [idProduct, setIdProduct] = useState([]);
    let products = useSelector(state => state.products)

    React.useEffect(() => {
        console.log(openDetail)
    },[openDetail])

    React.useEffect(() => {
        dispatch(getAllProducts())
        console.log(detail)
    },[])

    const handleClick = async (e) => {
        setOpenDetail(!openDetail)
        // if(openDetail) {
        //     for (let z=0; z<detail.length; z++) {
        //         // console.log(detail[z][0][0])
        //         for (let i=0; i<products.length; i++) {
        //             // console.log(products[i].title)
        //             if(detail[z][0][0].split(': ')[1] === products[i].title) {
        //                 setIdProduct([...idProduct, products[i].id])
        //             }
        //         }
        //     }
        // }
        // else {
        //  setIdProduct([])
        // }
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
                <td className="centrado">
                {
                    openDetail &&
                    detail.map(d => (
                        <div>
                            <p>
                            {d}   
                            </p>
                        </div>
                    ))
                }
                </td>
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

        </div>
    );
};