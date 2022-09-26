import React from "react";
import CrudTableRow from "./CrudTableRow";
import Table from 'react-bootstrap/Table';

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      {/* <h3>Tabla de Datos</h3> */}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Margin</th>
            <th>Price</th>
            {/* <th>Description</th> */}
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </Table>

    </div>
  );
};

export default CrudTable;
