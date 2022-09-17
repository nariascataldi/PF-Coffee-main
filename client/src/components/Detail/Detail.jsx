import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getDetail} from '../../redux/actions'
import './Detail.css'


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

        <div className='card'>
            {
                detail ?
                <div key={detail.id}>                   
                    <img src={detail.image} className='card-img-top img' alt="Image product"/>
                    <div className='card-body'>
                    <h3 className='card-title'>{detail.title}</h3>
                    </div>
                    
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item fondo'>Description: {detail.description}</li>
                            <li className='list-group-item fondo'>Price: {detail.price} $</li>
                            <li className='list-group-item fondo'>Like: {detail.like}</li>
                            <li className='list-group-item fondo'>Stock: {detail.stock}</li>
                            <li className='list-group-item fondo'>Diets: aca las diets</li>                          
                            <li className='list-group-item fondo'>Categories: {detail.categories?.map(e=>e.name)}</li>
                        </ul>
                    
                </div> :
                <p>Cargando...</p>

                        }
            <div className='card-body none'>            
            <Link to="/home">
                <span>Volver</span>
            </Link>
            </div>
        </div>
    )
}
