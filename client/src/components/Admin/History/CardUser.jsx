import React from "react";

const CardUser = ({
  id,
  title,
  price,
  stock,
}) => {

  return (
    <tr>
      <td> <p>{id}</p> </td>
      <td> {title} </td>
      <td> $ {price} </td>
      <td>  {stock} </td>
    </tr>
  );
};

export default CardUser