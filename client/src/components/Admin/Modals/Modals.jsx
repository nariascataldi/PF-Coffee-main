import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../../hooks/UseModal';
import { postProduct } from '../../../redux/actions';
import Modal from './Modal';
import styles from "./Modals.module.css";

function Modals() {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

    // let dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     dispatch(postProduct({
    //     title: "cafecito",
    //     price: 400,
    //     description: "Café espresso con caramelo, leche descremada al vapor y toques de canela.",
    //     image: "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575620/small_cafe_14_cd3046e9bb.jpg",
    //     disable: false,
    //     like: 0,
    //     stock: 0,
    //     sale_count: 0,
    //     cost: null,
    //     margin: null,
    //     }))
    // }

  return (
    <div>
        {/* <h2>Modales</h2>
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
        </Modal> */}
        {/* <button onClick={() => handleSubmit()}>X</button> */}
    </div>
  );
}

export default Modals;