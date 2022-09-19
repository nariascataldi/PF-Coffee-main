import React from "react";

export default function Card({ id, title, image, price, cost, margin, description, like, stock }) {
  return (
    <div>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th class="centrado">id</th>
            <th class="centrado">Image</th>
            <th class="centrado">Products</th>
            <th class="centrado">Price</th>
            <th class="centrado">Cost</th>
            <th class="centrado">Margin</th>
            <th class="centrado">Description</th>
            <th class="centrado">Like</th>
            <th class="centrado">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="centrado"> <p>{id}</p> </td>
            <td class="centrado"> <img className='img-thumbnail' src={image} alt='cartas' /> </td>
            <td class="centrado"> {title} </td>
            <td class="centrado"> $ {price} </td>
            <td class="centrado"> $ {cost} </td>
            <td class="centrado"> {margin} </td>
            <td class="centrado">  {description} </td>
            <td class="centrado">  {like} </td>
            <td class="centrado">  {stock} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}