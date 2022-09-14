import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import './Home.css'
import NavBar from './NavBar/NavBar';

export default function Home(){
    const dispatch = useDispatch
    useEffect(()=> {
        dispatch(getAllProducts());
    },[])

    return (
        <div>
            <p>Este es el home</p>
        </div>
    )
}