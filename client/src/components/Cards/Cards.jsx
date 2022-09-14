import React from "react";  
import {useState} from 'react'
import { useSelector } from "react-redux";
import Card from "../Card";
import Paginated from "../../Paginated";

export default function Cards (){
    const {allProducts} = useSelector(state=>state)

        //paginado
        const[currentPage, setCurrentPage]=useState(1)
        const[productsPerPage, setProductsPerPage]= useState(9)
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

            <div>
                <Paginated 
                    productsPerPage={productsPerPage}
                    allProducts={allProducts.length}
                    paginated={paginated}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <div>
                {currentProducts && currentProducts.map(p=>{
                    return <Card
                    name={p.name}
                    image={p.image}
                    title={p.title}
                    price={p.price}
                    />
            })}  
            </div>

        </div>
    ) 
    }
}