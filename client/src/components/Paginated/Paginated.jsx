import React from 'react';

export default function Paginated ({productsPerPage, allPoducts, paginated, currentPage, setCurrentPage}){
    const pageNumber= []
    let totalPage= Math.ceil(allPoducts/productsPerPage)
    for(let i=1; i<=totalPage; i++){
        pageNumber.push(i)
    }
    return(
        <div>
            <ul>
                <button
                    disabled= {currentPage === 1}
                    onClick={()=>
                    setCurrentPage(currentPage === 1 ?
                        currentPage :
                        currentPage - 1)}
                >Prev.</button>

                <li>
                    {pageNumber && pageNumber.map((number)=>(
                        <button
                            key={number}
                            onClick={()=>paginated(number)}
                        >
                            {number}
                        </button>
                    ))}
                </li>

                <button
                    disabled={currentPage === pageNumber.length}
                    onClick={()=>
                    setCurrentPage(currentPage === totalPage ?
                        currentPage :
                        currentPage + 1)
                    }
                >
                    Next.
                </button>
            </ul>
        </div>
    )
}