import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { title, cost, margin, price, stock, id } = el;

  return (
    <tr className="mb-3" >
      <td>{title}</td>
      <td>{cost}</td>
      <td>{margin}</td>
      <td>{price}</td>
      {/* <td>{description}</td> */}
      <td>{stock}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
