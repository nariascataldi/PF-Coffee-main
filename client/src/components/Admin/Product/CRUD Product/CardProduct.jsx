import React from "react";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import styles from '../../../../styles/NavBar.module.css';



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
    <tbody>
      <tr>
        <td className="centrado">
          <Link to={`/modProduct/${id}`}>
            <button type="button" className={styles.buttonPrice}>
              modify
            </button>
          </Link>
        </td>
        <td className="centrado">
          {" "}
          <p>{id}</p>{" "}
        </td>
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
        <td className="centrado"> {description} </td>
        <td className="centrado"> {like} </td>
        <td className="centrado"> {stock} </td>
        {disable === false ? (
          <td>
            <p>Asset</p>
          </td>
        ) : (
          <td>
            <p>Inactive</p>
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default CardProduct