import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import axios from "axios";


const baseUrl = 'http://localhost:3001/products';

const CrudApp = () => {

  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);


  const peticionGet = async () => {

    await axios.get(baseUrl)
      .then(response => {
        setDb(response.data);
      })

  }

  useEffect(async () => {
    await peticionGet();
  }, [])

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
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
