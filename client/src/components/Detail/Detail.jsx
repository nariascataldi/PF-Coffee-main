import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fillCart, fillCartLocalS, getDetail, postComment, setFillCart } from '../../redux/actions';
import './Detail.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { BsChevronCompactLeft,BsArrowRight } from 'react-icons/bs'; // BsChevronCompactRight,
import Loading from '../Loading/Loading';
import StarRating from '../StarRating/StarRating';


export default function Detail(props){
    const dispatch= useDispatch()
    const {fillCart} =useSelector(state=>state);
    const {id}= useParams()
    // para Loading
    const [load, setLoad] = useState(false);
    const [stars, SetStars] = useState(0);
    const [comment, setComment] = useState('');
   

    const {detail}= useSelector(state=>state)

    useEffect(()=> {
        setLoad(true);
        dispatch(getDetail(id));//
        setTimeout(()=>{
            setLoad(false)
        },3000);
    },[dispatch]);

    const handleStar = (e)=>{
        e.preventDefault();
        SetStars(e.target.value);
    };

    const handleChange = (e)=>{
        e.preventDefault();
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postComment({id, stars, comment}));
        alert('Comment create successfuly!');        
    };   

    //actualizo el estado de redux 'filtCart' con la variable arrayLs
    let arrayLs = [];
    const handleOnClick = () => {
        arrayLs.push(detail)
        dispatch (setFillCart(arrayLs))
        alert('Product successfuly added!');
    }
   // lleno el local storage con el estado de redux 'fillCart
        useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(fillCart))
    },[fillCart])
   

    return(
        <div>
        <div className='card'>

            <NavBar noFilters/>
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
                        <div><button className='add-to-cart-d' onClick={handleOnClick}>Add to cart <BsArrowRight/></button></div>
                    </div>
                    <div className='box'>  
                        <form onSubmit={(e)=>handleSubmit(e)}>
                            <h4>Comment</h4>
                            <input type="text"  onChange={(e)=>handleChange(e)}
                                placeholder="complete..."   />
                            <h4>Starts</h4>
                            <input type="number"  onChange={(e)=>handleStar(e)}
                                placeholder="1->5"  min="1" max="5" />
                            <StarRating stars={stars}/>
                            <br/><br/>
                            <input type="submit" value="qualify"/>
                        </form>
                    </div>   
                </div> 

                        }
            
            
        </div>
        <Footer/>
        </div>
    )
}
