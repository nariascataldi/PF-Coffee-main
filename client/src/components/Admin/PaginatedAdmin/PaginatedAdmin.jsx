import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

export default function Paginated({ productsPerPage, allPoducts, paginated, currentPage, setCurrentPage }) {
  const pageNumber = []
  let totalPage = Math.ceil(allPoducts / productsPerPage)
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i)
  }
  return (
    <div >
      <button className='boton-next'
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage === 1 ?
            currentPage :
            currentPage - 1)}
      >Prev.</button>
      {pageNumber && pageNumber.map((number) => (
        <button
          key={number}
          onClick={() => paginated(number)}
        >
          {number}
        </button>
      ))}
      <button className='boton-next'
        disabled={currentPage === pageNumber.length}
        onClick={() =>
          setCurrentPage(currentPage === totalPage ?
            currentPage :
            currentPage + 1)
        }
      >
        Next.
      </button>
    </div>
  )
}