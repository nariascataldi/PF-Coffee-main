import React from 'react';
import styles from "./Modals.module.css";

function Modal({children, isOpen, closeModal}) {

    const handleContainerModalClick = (e) => {
        e.stopPropagation();
    }

  return (  
    <article className={`${styles.modal} ${isOpen && styles.isOpen}`} onClick={closeModal}>
        <div className={styles.modalContainer} onClick={handleContainerModalClick}>
            <button className={styles.modalClose} onClick={closeModal}>X</button>
            <div className={styles.children}>
              {children}
            </div>
        </div>
    </article>
  );
}

export default Modal;