import React, { useEffect } from "react"
import styles from '../../../styles/Paginated.module.css'

export default function Paginated({
  productsPerPage,
  products,
  paginated,
  currentPage,
  setCurrentPage,
}) {
  const pageNumber = [];
  let totalPage = Math.ceil(products.length / productsPerPage);
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }
  useEffect(() => {
    if (currentPage > pageNumber.length) {
      paginated(1);
    }
  }, [products, currentPage, pageNumber, paginated])


  return (
    <div className={styles.container}>
      <div className={styles.botones}>
        <button
          className={styles.next}
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
        >
          &#171;
        </button>

        {pageNumber &&
          pageNumber.map((number) => (
            <button
              key={number}
              onClick={() => paginated(number)}
              className={number === currentPage ? styles.active : styles.number}
            >
              {number}
            </button>
          ))}

        <button
          className={styles.next}
          disabled={currentPage === pageNumber.length}
          onClick={() =>
            setCurrentPage(
              currentPage === totalPage ? currentPage : currentPage + 1
            )
          }
        >
          &#187;
        </button>
      </div>
    </div>
  );
}
