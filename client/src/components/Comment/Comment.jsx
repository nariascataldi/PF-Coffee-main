import React from "react";
import StarRating from "../StarRating";
import styles from './Comment.module.css';
import { getAllUsers } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


export default function Comment(detail) {
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getAllUsers()); //
      }, [dispatch]);

    console.log("de comment", detail)
    const {users} = useSelector((state)=>state);
    console.log("user", users)
    //console.log("userId", detail.detail.comments?.map(a=>a.userId))
    let userid = detail.detail.comments?.map(a=>a.userId).join()
    //console.log("userId", userid)
    
    let usuario = users?.find(e => e.id === userid)
    console.log("usuario", usuario)
    
      // if userInit.id es igual a userid que muestre el nombre en la linea 39

    let comment = [];
    let estrellas = [];

   

    detail.detail.comments?.map(a => {
        comment.push([a.comment, a.stars])
        estrellas.push(a.stars)
    })
    console.log("stars",estrellas)
    let suma = 0;
    for (let i = 0; i < estrellas.length; i++) {
        suma = suma + estrellas[i] 
    }
    console.log("suma",suma)
    let num = 0
    if(suma === 0){num = 0} else{
    num = (suma/estrellas.length).toFixed(1)}
    let prom = Math.round(suma/estrellas.length)
    console.log("promedio",num)

    return (
        <div className={styles.container}>
            <div className={styles.number}><h1 className={styles.numero}>{num}</h1><StarRating className ={styles.estrella} stars={prom} /></div>
            <h1 className={styles.title}>Comments</h1>
            <div className={styles.caja}>
                <h3 className={styles.stars}>{comment.map(b => (<ul><StarRating stars={b[1]} /></ul>))}</h3>
                <h3 className={styles.comment}>{comment.map(a => (<ul>{'" ' + a[0] + ' "'}</ul>))}</h3>
            </div>
        </div>
    )


}