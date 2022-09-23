import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { title, price, id } = el;

  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
