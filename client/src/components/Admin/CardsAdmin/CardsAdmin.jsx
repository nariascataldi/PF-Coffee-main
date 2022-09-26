import React, { useEffect } from "react";
import { useState } from 'react'
import { useSelector } from "react-redux";
import Card from "../CardAdmin/CardAdmin";
import Paginated from "../../Paginated";
import Loading from "../../Loading";

import styles from '../../../styles/Cards.module.css'


export default function Cards({ load }) {
  const { products } = useSelector(state => state)
  //paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(8)
  // console.log("CardsAdmin: ",{setProductsPerPage});
  const indexOfLast = currentPage * productsPerPage
  const indexOfFirst = indexOfLast - productsPerPage
  const currentProducts = products.slice(indexOfFirst, indexOfLast)
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber)
  };
  if (!products.length) {
    return (
      <div className={styles.not_found}><h4>Product not found!</h4></div>
    )
  }
  return (
    <div>
      <div className={styles.paginadoAdmin}>
        <Paginated
          productsPerPage={productsPerPage}
          products={products}
          paginated={paginated}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className={styles.cards_wraper}>
        {load ? <Loading /> :
          currentProducts.map(p => {
            return (!p.disable && <Card
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.image}
              title={p.title}
              price={p.price}
              disable={p.disable}
            />)
          })}
      </div>
    </div>
  )
}
