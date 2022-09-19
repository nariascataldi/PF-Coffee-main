import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getDetail} from '../../redux/actions'
import './Detail.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs';
import Loading from '../Loading/Loading';


export default function Detail(props){
    
    console.log("las props: ", props)
    const dispatch= useDispatch()
    const {id}= useParams()
    // para Loading
    const [load, setLoad] = useState(false);

    useEffect(()=> {
        setLoad(true);
        dispatch(getDetail(id));//
        setTimeout(()=>{
            setLoad(false)
        },3000);
    },[dispatch])
    

    const {detail}= useSelector(state=>state)
    console.log("detail: ", detail)
    return(
        <div>
        <div className='card'>
            <NavBar/>
            { load ? <Loading/> :
                !detail? null :
                <div key={detail.id} className='card-detail'> 
                    <div className='card-body none'>            
                        <Link className='back-boton-detail' to="/home">
                            <button className='boton-next1'><BsChevronCompactLeft/></button>
                        </Link>
                    </div>
                    <div>
                        <img src={detail.image} className='card-img-top img' alt="Image product"/>
                    </div>               
                    <div className='text-detail'>
                        <div className='card-body'>
                        <h1 className='card-title'>{detail.title}</h1>
                        <h3>$ {detail.price}</h3>
                        </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item fondo'>{detail.description}</li>
                                <li className='list-group-item fondo'>Like: {detail.like}</li>
                                <li className='list-group-item fondo'>Stock: {detail.stock}</li>
                                <li className='list-group-item fondo'>Diets: {detail.diets?.map(e=>e.name)}</li>                          
                                <li className='list-group-item fondo'>Categories: {detail.categories?.map(e=>e.name)}</li>
                            </ul>
                    </div>
                    
                    
                </div> 

                        }
            
            
        </div>
        <Footer/>
        </div>
    )
}
