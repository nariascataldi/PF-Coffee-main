import React from "react";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure'


const CardProduct = ({
  id,
  title,
  price,
  description,
  image,
  disable,
  like,
  stock,
  sale_count,
  cost,
  margin,
  diets,
  categories,
  providers
}) => {


  return (
    <div>
      <table className="table">
        <thead className="table-primary">
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
            <th className="centrado">Disable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="centrado"> <p>{id}</p> </td>
            <td className="centrado">
              <Figure>
                <Figure.Image
                  width={17 * 3}
                  height={18 * 3}
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
            {
              disable === false ?
                <td><p>Asset</p></td> :
                <td><p>Inactive</p></td>
            }
            <td className="centrado"><Link to={`/modProduct/${id}`}>
              <button type="button" className="btn btn-outline-primary" >modify</button>
            </Link></td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default CardProduct