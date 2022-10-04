import React, { useEffect } from "react";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Card from "../CardAdmin/CardAdmin";
import PaginatedAd from "../../PaginatedAd";
import Loading from "../../Loading";
import Table from 'react-bootstrap/Table';
import { orderByStock } from "../../../redux/actions";


import styles from '../../../styles/Admin/Cards.module.css'


export default function Cards({ load }) {

  const [sortStock, setSortStock] = useState('');

  const dispatch = useDispatch();

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

  //--ordenar---------------------
  function handleSortStock(e) {
    e.preventDefault()
    dispatch(orderByStock(e.target.value))
    setCurrentPage(1)
    setSortStock(`Ordenado ${e.target.value}`)
  }
  //------------------------------

  if (!products.length) {
    return (
      <div className={styles.not_found}><h4>Product not found!</h4></div>
    )
  }
  return (
    <div>
      <div className={styles.paginadoAdmin}>
        <PaginatedAd
          productsPerPage={productsPerPage}
          products={products}
          paginated={paginated}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className={styles.conte} >
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th className="centrado">id</th> */}
              <th className="centrado">Image</th>
              <th className="centrado">Products</th>
              <th className="centrado">Price</th>
              {/* <th className="centrado">Cost</th>
              <th className="centrado">Margin</th> */}
              {/* <th className="centrado">Description</th>  */}
              {/* <th className="centrado">Like</th> */}
              <th className="centrado">Stock

                  <button className={styles.sors} onClick={handleSortStock} value="max">⬆️</button>
                  <button className={styles.sors} onClick={handleSortStock} value="min">⬇️</button>

              </th>
              {/* <th className="centrado">Disable</th> */}
            </tr>
          </thead>
          {load ? <Loading /> :
            currentProducts.map(p => {
              return (!p.disable && <Card
                key={p.id}
                // id={p.id}
                name={p.name}
                image={p.image}
                title={p.title}
                // cost={p.cost}
                // margin={p.margin}
                price={p.price}
                // description={p.description}
                // disable={p.like}
                stock={p.stock}
              />)
            })}
        </Table>
      </div>
    </div>
  )
}
