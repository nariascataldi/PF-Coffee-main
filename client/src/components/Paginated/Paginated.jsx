import React, { useEffect } from 'react';
import './Paginated.css';
import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function Paginated ({productsPerPage, products, paginated, currentPage, setCurrentPage}){
    const pageNumber= []
    let totalPage= Math.ceil(products.length/productsPerPage)
    for(let i=1; i<=totalPage; i++){
        pageNumber.push(i)
    }
    useEffect (()=>{
        if (currentPage > pageNumber.length) { paginated(1)} 
        },[products])
    return(
        <div className='botones-paginado'>
            
                <button className='boton-next1'
                    disabled= {currentPage === 1}
                    onClick={()=>
                    setCurrentPage(currentPage === 1 ?
                        currentPage :
                        currentPage - 1)}
                ><BsChevronCompactLeft/></button>

                
                    {pageNumber && pageNumber.map((number)=>(
                        <button
                            key={number}
                            onClick={()=>paginated(number)}
                            className={`number ${currentPage===number? "active1" : ""}`}

                        >
                            {number}
                        </button>
                    ))}
            

                <button className='boton-next1'
                    disabled={currentPage === pageNumber.length}
                    onClick={()=>
                    setCurrentPage(currentPage === totalPage ?
                        currentPage :
                        currentPage + 1)
                    }
                ><BsChevronCompactRight/></button>
        
        </div>
    )
}