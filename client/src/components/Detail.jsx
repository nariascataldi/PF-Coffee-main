import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";

import {
  fillCart,
  fillCartLocalS,
  getDetail,
  postComment,
  setFillCart,
} from "../redux/actions";

import NavBar from './NavBar';
import Footer from './Footer';
import Loading from './Loading';
import StarRating from './StarRating';


import styles from '../styles/Detail.module.css'


export default function Detail(props){
  const dispatch = useDispatch();
  const { fillCart } = useSelector((state) => state);
  const { id } = useParams();
  // para Loading
  const [load, setLoad] = useState(false);
  const [stars, SetStars] = useState(0);
  const [comment, setComment] = useState("");

  const { detail } = useSelector((state) => state);
   console.log("detail: ", detail.id)

  useEffect(() => {
    setLoad(true);
    dispatch(getDetail(id)); //
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, [dispatch]);

  const handleStar = (e) => {
    e.preventDefault();
    SetStars(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(id);
    console.log(stars);
    console.log(comment);
    e.preventDefault();
    dispatch(postComment({ id, stars, comment }));
    alert("Comment create successfuly!");
  };

  //actualizo el estado de redux 'filtCart' con la variable arrayLs
  let arrayLs = [];
  const handleOnClick = () => {
    arrayLs.push(detail);
    dispatch(setFillCart(arrayLs));
    alert("Product successfuly added!");
  };
  // lleno el local storage con el estado de redux 'fillCart
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(fillCart));
  }, [fillCart]);

  return (
    <div>
      <div className={styles.card}>
        <NavBar noFilters />
        {load ? (
          <Loading />
        ) : !detail ? null : (
          <div key={detail.id} className={styles.detail}>
            <div>
              <Link className={styles.back} to="/home">
                <button className={styles.next}>&#171;</button>
              </Link>
            </div>
            <div>
              <img
                src={detail.image}
                className={styles.img}
                alt="Image product"
              />
            </div>
            <div className={styles.text}>
              <div>
                <h1>{detail.title}</h1>
                <h2>$ {detail.price}</h2>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item fondo'>{detail.description}</li>
                <li className='list-group-item fondo'>Like: {detail.like}</li>
                <li className='list-group-item fondo'>Stock: {detail.stock}</li>
                <li className='list-group-item fondo'>
                  Diets: {detail.diets?.map((e) => e.name)}
                </li>
                <li className='list-group-item fondo'>
                  Categories: {detail.categories?.map((e) => e.name)}
                </li>
              </ul>
              <div>
                <button 
                className={styles.ad_cart}
                onClick={handleOnClick}>
                  Add to cart <BsArrowRight />
                </button>
              </div>
            </div>

            <div className={styles.box}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <h4>Comment</h4>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="complete..."
                />
                <h4>Starts</h4>
                <input
                  type="number"
                  onChange={(e) => handleStar(e)}
                  placeholder="1->5"
                  min="1"
                  max="5"
                />
                <StarRating stars={stars} />
                <br />
                <br />
                <input type="submit" value="qualify" />
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
