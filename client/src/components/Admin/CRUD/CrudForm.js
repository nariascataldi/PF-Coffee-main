import React, { useState, useEffect } from "react";

const initailForm = {
  title: "",
  price: "",
  id: null,
};

const CrudForm = ({ updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price) {
      alert("Datos incompletos");  //poner un modal
      return;
    }
    updateData(form);

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Name"
          onChange={handleChange}
          value={form.title}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={form.price}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
