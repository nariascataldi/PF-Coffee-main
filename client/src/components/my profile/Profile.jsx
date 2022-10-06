import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'

import styles from './Profile.module.css'
import style from '../../styles/Admin/ProductCreate.module.css'
import { getUserDetail } from "../../redux/actions";

function Profile (){
    let userInit= useSelector(state => state.userInit)
    let dispatch= useDispatch()
    let userDetail= useSelector(state=>state.userDetail)
    useEffect(()=>{
        dispatch(getUserDetail(userInit.id))
    },[])
    console.log("detail: ", userDetail)
    console.log("del storage: ", userInit)
return(
    <div className={styles.container}>
    <div >
    <img src={userDetail?.avatar} className={styles.img} alt="avatar not found"/><br></br>
    </div>
    <div className={styles.container2}>
    <label className={style.title}>{userDetail?.name}</label><br></br>
    <label className={style.title}>{userDetail?.lastName}</label><br></br>
    <label className={style.title}>{userDetail?.mail}</label><br></br>
    <label className={style.title}>{userDetail?.birthday}</label>
    </div>
    </div>
)
}
export default Profile;