import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOferts } from '../../../redux/actions';
import ListProducts from '../Product/CRUD Product/ListProduct';
import styles from './CardOferts.module.css'

const CardOferts = () => {
    let dispatch = useDispatch();
    let oferts = useSelector(state => state.oferts)

    useEffect(() => {
        dispatch(getAllOferts())
    },[])

  return (
    <div>
        {
            oferts && oferts.map(o => (
                <div className={styles.containerOfert}>
                    <div>
                        <strong>{o.title}</strong>
                        <p>{o.description}</p>
                        <p>Date: from {o.dateStart} to {o.dateEnd}</p>
                        <p>Discount: {o.sale}%</p>
                        <img src={o.image}/>
                    </div>
                    <div className={styles.rigth}>
                        {
                            o.products.length ? (<p><strong>Products:</strong> {o.products.map(p => (
                                <p>
                                    <hr />
                                    {p.title}
                                </p>  
                            ))}</p>):
                            o.categories.length ? (<p> <strong>categories: </strong> {o.categories.map(c => (
                                <p>
                                    <hr />
                                    {c.name}
                                </p>
                            ))}</p>):
                            o.diets.length ? (<p> <strong>Diets:</strong> {o.diets.map(d => (
                                <p>
                                    <hr />
                                    {d.name}
                                </p>
                            ))}</p>):null
                        }
                    </div>
                </div>
            ))
        }
    </div>
  );
};

export default CardOferts