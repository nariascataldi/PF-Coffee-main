import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const initailForm = {
  id: null,
  image: "",
  title: "",
  cost: "",
  margin: "",
  price: "",
  description: "",
  stock: "",
  diets: "",
  categories: "",
  providers: "",
};

const CrudForm = ({ updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  const dispatch = useDispatch();

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
    dispatch(updateData(form));

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

        <input className="mb-3"
          type="text"
          name="title"
          placeholder="Name"
          onChange={handleChange}
          value={form.title}
        />
        <input className="mb-3" type="number" name="cost" placeholder="Cost" onChange={handleChange} value={form.cost} />
        <input className="mb-3" type="number" name="margin" placeholder="margin" onChange={handleChange} value={form.margin} />
        <input className="mb-3" type="number" name="price" placeholder="Price" onChange={handleChange} value={form.price} />
        <textarea className="mb-3" type="text" name="description" placeholder="description" onChange={handleChange} value={form.description} />
        <input className="mb-3" type="number" name="stock" placeholder="stock" onChange={handleChange} value={form.stock} />


        <input className="mb-3" type="submit" value="Enviar" />
        <input className="mb-3" type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
