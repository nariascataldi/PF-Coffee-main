import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets, postProduct } from "../../../redux/actions"; //2
import { useNavigate } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import "bootstrap/dist/css/bootstrap.min.css";
import style from './ProductCreate.module.css';

var testImage = /(https?:\/\/.*\.(?:png|jpg))/;
var testName = /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/;
var testDescription = /^[A-Za-z]+$/i;
var testNumber = /^\d{1,2}$/;


function validate(post) {

  let errors = {};
  /** TITLE   */
  if (!post.title) errors.title = 'Enter product name';
  if (!testName.test(post.title)) errors.title = 'Start the name with capital letter. Only characters "":.,_- are accepted';
  if (100 <= [post.title].length) errors.title = 'Not exceed 100 characters';
  /** Cost */
  if (!post.cost) errors.cost = 'Enter a cost from provider';
  /** Margin */
  if (!post.margin) errors.margin = 'Enter a margin of the product';
  /** Price */
  if (!post.price) errors.price = 'Enter a price of the product';

  /** description */
  if (!post.description) errors.description = 'Enter a description of the product';
  /** IMAGE */
  if (!testImage.test(post.image)) errors.image = `Enter the URL of a representative image in jpg or png format`;
  /** stock */
  if (!post.stock || !testNumber.test(post.stock)) errors.stock = `Enter a number of product`;
  /** Diet */
  if (![post.diet].length) errors.diet = 'Choose at least one type of diet';

  return errors;
}

export default function FormularioProducto() {
  const dispatch = useDispatch();
  var diet = useSelector((state) => state.diets);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllDiets())
  }, [dispatch])

  const [post, setPost] = useState({
    // defaultValues: {
    //   title: 'Café café tinto',
    //   cost: '5',                          //*
    //   margin: '50',                      //*
    //   price: '',                         //*
    //   description: 'client',              //*
    //   image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/18/8d/1a/cafe-tinto-de-la-sierra.jpg',
    //   // disable: false,
    //   like: '5',
    //   stock: '10',
    //   diet: 'dairy free',
    // }
  });
  var suggested = (Math.round(((post?.cost) * (((post?.margin) / 100) + 1))));
  function handleInputChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...post,
      [e.target.name]: e.target.value
    }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please fill in all the fields")
      // console.log('handleSubmit ', { errors });
    }
    else {
      console.log('handleSubmit ', { post });
      dispatch(postProduct(post));
      alert('Product create successfuly!');
      /**Clear */
      setPost({
        title: '',
        cost: '',
        margin: '',
        price: '',
        description: '',
        image: '',
        // disable: false,
        like: '',
        stock: '',
        diet: '',
      })
      e.target.reset();
      navigate('/productAdmin')
    }
  };
  /**Diet */
  function handleSelectDiets(e) {

    console.log('Handle ', e.target.value);
    setPost({
      ...post,
      diet: Array.from(new Set([e.target.value]))
    });
  };
  function handleDelete(el) {
    setPost({
      ...post,
      diet: post.diet.filter((d) => d !== post.diet),
    });
  }

  // var option = diet?.map(diet => diet.name)
  // console.log({ option });

  return (
    <>
      <h2>Product</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <div id="Nombre" className="mb-3">
          <label
            className="form-label"
          >Name</label>
          <input
            id='title'
            className="form-control"
            type="text"
            placeholder="Product name"
            maxLength={50}
            autoFocus
            required={true}
            value={post.title}
            key='title'
            name='title'
            onChange={e => handleInputChange(e)} />
          {errors.title && (
            <p>{errors.title}</p>
          )}
        </div>
        <div id='Costo_Margen' className="row">
          <div id='Cost' className="col">
            <label
              className="form-label"
            >Provider price</label>
            <input
              id="cost"
              className="form-control"
              type="number"
              placeholder="5"
              value={post.cost}
              key='cost'
              name='cost'
              onChange={e => handleInputChange(e)}
            />
            {errors.cost && (
              <p>{errors.cost}</p>
            )}
          </div>
          <div id="Margen" className="col">
            <label
              className="form-label"
            >Margin</label>
            <input
              id="margin"
              className="form-control"
              type="number"
              placeholder="5"
              value={post.margin}
              key='margin'
              name='margin'
              onChange={e => handleInputChange(e)} />
            {errors.margin && (
              <p>{errors.margin}</p>
            )}

          </div>
        </div>
        <div id="PrecioPublico" className="mb-3">
          <label
            className="form-label"
          >Retail Price</label>
          {suggested >= 0 &&
            <p className={style.p_form}>Suggested integer: ${suggested}</p>}
          <input
            id="price"
            className="form-control"
            type="number"
            value={post.price}
            key='price'
            name='price'
            onChange={e => handleInputChange(e)} />
          {errors.price && (
            <p>{errors.price}</p>
          )}
        </div>
        <div id="Descripcion" className="mb-3">
          <label
            className="form-label"
          >Product description</label>
          <textarea
            id="description"
            className="form-control"
            type="text"
            placeholder="Choicely"
            required={true}
            maxLength={200}
            pattern={testDescription}
            value={post.description}
            key='description'
            name='description'
            onChange={e => handleInputChange(e)} />
          {errors.description && (
            <p>{errors.description}</p>
          )}
        </div>
        <div id="Image" className="mb-3">
          <label
            className="form-label"
          >Product Image</label>
          <input
            id="image"
            className="form-control"
            type="url"
            placeholder="📷 URL"
            maxLength={200}
            value={post.image}
            key='image'
            name="image"
            onChange={e => handleInputChange(e)}
          />
          {errors.image && <p className={style.p_form}>{errors.image}</p>}
        </div>
        <div id="Cantidad" className="mb-3">
          <label
            className="form-label"
          >Amount</label>
          <input
            id="stock"
            className="form-control"
            type="number"
            placeholder="🔢"
            required={true}
            pattern={/^\d{1, 2}$/}
            value={post.stock}
            key='stock'
            name='stock'
            onChange={e => handleInputChange(e)}
          />
          {errors.stock && <p className={style.p_form}>{errors.stock}</p>}
        </div>
        <div id="Desactivo" className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            value={post.disable}
            onChange={e => handleInputChange(e)}
          />
          <label
            className="form-check-label"
          >Disable</label>
        </div>
        <div className={style.diet}>
          <select
            onChange={e => handleSelectDiets(e)}
            defaultValue='default'
            className={style.dietSelect}>
            <option
              value="default"
              disabled
              className={style.dietOption}>Choose diet</option>
            {diet &&
              diet.map((diet) => diet.name && (
                <option
                  key={diet.name}
                  value={diet.name}
                  className={style.dietOption}
                >
                  {diet.name}
                </option>
              ))
            }
          </select>
          {errors.diet && (
            <p style={{ float: 'right' }}>{errors.diet}</p>
          )}
          <div className={style.sidebar_box}>
            <p>You have selected that:</p>
              {post.diet && <div className={style.selectedItems}>
                <p>{post.diet}</p>
                <button onClick={() => handleDelete(post.diet)}>x</button>
              </div>}
            
          </div>
        </div>
        <div id="Guardar" className="d-grid gap-2">
          <input
            id={style.submit}
            className="btn btn-success"
            type="submit"
            value="Save"
            disabled={(!post.title || !post.price) ? true : false}
          />
        </div>
      </form>
    </>
  )
}
