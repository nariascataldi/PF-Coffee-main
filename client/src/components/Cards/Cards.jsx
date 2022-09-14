import React from "react";
import { useState } from 'react'
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/index"
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";

export default function Cards() {
    const { products } = useSelector(state => state)
    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(9)
    const indexOfLast = currentPage * productsPerPage
    const indexOfFirst = indexOfLast - productsPerPage
    const currentProducts = products.slice(indexOfFirst, indexOfLast)
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)


        if (!currentProducts.length) {
            return (
                <div><h3>Not found!</h3></div>
            )
        }
        return (
            <div>

                <div>
                    <Paginated
                        productsPerPage={productsPerPage}
                        products={products.length}
                        paginated={paginated}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>

                <div>
                    {currentProducts && currentProducts.map(p => {
                        return <Card
                            title={p.title}
                            image={p.image}
                            price={p.price}
                        />
                    })}
                </div>

            </div>
        )
    }
}