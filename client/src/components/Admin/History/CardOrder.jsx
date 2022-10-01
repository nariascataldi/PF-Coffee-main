import React from "react";

const CardOrder = ({
  user,
  date,
  detail,
  payment,
  paid,
  delivered,
  total
}) => {

  return (
    <tr>
      <td>{user}</td>
      <td>{date}</td>
      <td>{detail}</td>
      <td>$ {payment}</td>
      <td>{paid}</td>
      <td>{delivered}</td>
      <td>{total}</td>
    </tr>
  );
};

export default CardOrder