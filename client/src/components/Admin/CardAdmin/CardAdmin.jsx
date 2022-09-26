import React from "react";
import Figure from 'react-bootstrap/Figure'
import Table from 'react-bootstrap/Table';

export default function Card({ id, title, image, price, cost, margin, description, like, stock, disable }) {

  return (
    <div>
        <Table striped bordered hover>
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
              {/* <th className="centrado">Disable</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="centrado"> <p>{id}</p> </td>
              <td className="centrado">
                <Figure>
                  <Figure.Image
                    width={17*5}
                    height={18*5}
                    alt="Product delicius"
                    src={image}
                  />
                  {/* <img className='img-thumbnail' width='70 vw' src={image} alt='cartas' />  */}
                  </Figure>
                  </td>
              <td className="centrado"> {title} </td>
              <td className="centrado"> $ {price} </td>
              <td className="centrado"> $ {cost} </td>
              <td className="centrado"> {margin} </td>
              <td className="centrado">  {description} </td>
              <td className="centrado">  {like} </td>
              <td className="centrado">  {stock} </td>
              {/* <td className="centrado">  {disable} </td> */}
            </tr>
          </tbody>
        </Table>
    </div>
  )
}