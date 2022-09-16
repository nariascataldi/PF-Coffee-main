import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getDetail} from '../../redux/actions'


export default function Detail(props){
    
    console.log("las props: ", props)
    const dispatch= useDispatch()
    const {id}= useParams()
    useEffect(()=>{
        dispatch(getDetail(id));//
    },[dispatch])

    const {detail}= useSelector(state=>state)
    console.log("detail: ", detail)
    return(

        <div>
            {
                detail ?
                <div key={detail.id}>
                    <h3>{detail.title}</h3>
                    <img src={detail.image} alt="Image product"/>
                    <div>
                        <ul>
                            <li>Description: <p>{detail.description}</p></li>
                            <li>Price: <p>{detail.price} $</p></li>
                            <li>Like: <p>{detail.like}</p></li>
                            <li>Stock: <p>{detail.stock}</p></li>
                            <li>Diets: <p>aca las diets</p></li>
                            
                           <li>Categories: <p>{detail.categories?.map(e=>e.name)}</p></li>
                        </ul>
                    </div>
                </div> :
                <p>Cargando...</p>

                        }
            <Link to="/home">
                <button><span>Volver</span></button>
            </Link>
        </div>
    )
}
