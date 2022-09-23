import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Modal from "../Modals/Modal";
import { useModal } from '../../../hooks/UseModal';
import axios from "axios";


const baseUrl = 'http://localhost:3001/products';

const CrudApp = () => {

  const [db, setDb] = useState([]);
  const [id, setId] = useState(0);
  const [option, setOption] = useState('');
  const [dataToEdit, setDataToEdit] = useState(null)
  const [isOpenModal, openModal, closeModal] = useModal(false)


  const peticionGet = async () => {

    await axios.get(baseUrl)
      .then(response => {
        setDb(response.data);
      })

  }

  useEffect(async () => {
    await peticionGet();
  }, [])

  useEffect(async () => {
    console.log(option)
  }, [option])

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = async (id) => {
    await setId(id)
    await openModal()
  };

  const handleYesOrNo = async (e) => {
    if (e.target.value === 'yes') {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
      await closeModal()
    } else {
      await closeModal()
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <p>¿Estás seguro de eliminar el registro con el id '{id}'?</p>
          <button value='yes' onClick={(e) => handleYesOrNo(e)}>Si</button>
          <button value='no' onClick={(e) => handleYesOrNo(e)}>No</button>
        </Modal>
        <CrudForm
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
