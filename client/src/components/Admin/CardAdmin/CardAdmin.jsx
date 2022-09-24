import React from "react";


export default function Card({ id, title, image, price, cost, margin, description, like, stock }) {
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th className="centrado">id</th>
            <th className="centrado">Image</th>
            <th className="centrado">Products</th>
            <th className="centrado">Price</th>
            <th className="centrado">Cost</th>
            <th className="centrado">Margin</th>
            <th className="centrado">Description</th>
            <th className="centrado">Like</th>
            <th className="centrado">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="centrado"> <p>{id}</p> </td>
            <td className="centrado"> <img className='img-thumbnail' width='70 vw' src={image} alt='cartas' /> </td>
            <td className="centrado"> {title} </td>
            <td className="centrado"> $ {price} </td>
            <td className="centrado"> $ {cost} </td>
            <td className="centrado"> {margin} </td>
            <td className="centrado">  {description} </td>
            <td className="centrado">  {like} </td>
            <td className="centrado">  {stock} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}