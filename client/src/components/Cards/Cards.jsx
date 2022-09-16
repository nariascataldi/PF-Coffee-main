import React from "react";  
import {useState} from 'react'
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import './Cards.css';

export default function Cards (){
    const {allProducts} = useSelector(state=>state)

        //paginado
        const[currentPage, setCurrentPage]=useState(1)
        const[productsPerPage, setProductsPerPage]= useState(12)
        const indexOfLast= currentPage * productsPerPage
        const indexOfFirst= indexOfLast - productsPerPage
        const currentProducts= allProducts.slice(indexOfFirst, indexOfLast)
        const paginated= (pageNumber)=>{
            setCurrentPage(pageNumber)
              }
    if(!currentProducts.length){
        return (
            <div><h3>Not found!</h3></div>
        )
    }
    return (
        <div>

            <div className='paginado'>
                <Paginated 
                    productsPerPage={productsPerPage}
                    allProducts={allProducts.length}
                    paginated={paginated}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <div className="cards-wraper">
                {currentProducts && currentProducts.map(p=>{
                    return <Card
                    name={p.name}
                    image={p.image}
                    title={p.title}
                    price={p.price}
                    key={p.id}
                    />
            })}  
            </div>

        </div>
    ) 
  }
