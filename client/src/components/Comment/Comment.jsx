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

    detail.detail.comments?.map(a => {
        comment.push([a.comment, a.stars])

    })
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            <div className={styles.caja}>
                <p className={styles.stars}>{comment.map(b => (<ul><StarRating stars={b[1]} /></ul>))}</p>
                <p className={styles.name}>{usuario===undefined?" ":usuario.name + ":"}</p>
                <p className={styles.comment}>{comment.map(a => (<ul>{'" ' + a[0] + ' "'}</ul>))}</p>
            </div>
        </div>
    )


}