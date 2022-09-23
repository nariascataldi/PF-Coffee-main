import React from 'react';
import { useModal } from '../../../hooks/UseModal';
import Modal from './Modal';
import styles from "./Modals.module.css";

function Modals() {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola este es el contenido de mi modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Otro Modal</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus, magni optio
                consequuntur a quae vero fugiat explicabo
                exercitationem adipisci incidunt labore hic
                obcaecati ea error voluptatum nobis, vitae,
                magnam repellendus.
            </p>
            <img src="https://placeimg.com/400/400/nature" alt="Nature" />
        </Modal>
    </div>
  );
}

export default Modals;