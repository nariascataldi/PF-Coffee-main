import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, FormGroup, Input, Modal } from "reactstrap";
import { useModal } from "../../../hooks/UseModal";

import { 
  getAllDiets, 
  postProduct, 
  getAllProviders, 
  getAllCategories, postCloudinaryPhoto 
} from "../../../redux/actions";

import { ToastContainer, toast } from "react-toastify";
import styles from '../../../styles/Admin/ProductCreate.module.css';
import sty from '../../../styles/Admin/ProductCreate.module.css'



var testName = /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/;
var testDescription = /^[A-Za-z]+$/i;



function validate(input) {

  let errors = {};

  /** TITLE   */
  if (!input.title) errors.title = 'Enter product name';
  if (!testName.test(input.title)) errors.title = 'Start the name with capital letter. Only characters "":.,_- are accepted';
  if (100 <= [input.title].length) errors.title = 'Not exceed 100 characters';

  /** Cost */
  if (!input.cost) errors.cost = 'Enter a cost from provider';
  /** Margin */
  if (!input.margin) errors.margin = "Enter a product profit margin";
  /** Price */
  if (!input.price) errors.price = 'Enter a price of the product';
  /** description */
  if (!input.description) errors.description = 'Enter a description of the product';
  /** IMAGE */
  // if (!testImage.test(input.image)) errors.image = `Enter the URL of a representative image in jpg or png format`;
  /** stock */
  if (!input.stock) errors.stock = `Enter a number of product`;
  /** Diet */
  if (![input.diet].length) errors.diet = 'Choose at least one type of diet';

  return errors;
}

export default function FormProduct() {
  const dispatch = useDispatch();
  const [isOpenModal, openModal, closeModal] = useModal(false)
  var diet = useSelector((state) => state.diets);
  console.log({ diet });
  var provider = useSelector((state) => state.providers);
  console.log({ provider })
  var categories = useSelector((state) => state.categories);
  let responseCloudinary = useSelector(state => state.responseCloudinary)

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllDiets())
    dispatch(getAllProviders())
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(async () => {
    setInput({
      ...input,
      image: responseCloudinary.url
    })
    setErrors(validate({
      ...input,
      image: responseCloudinary.url
    }));
  }, [responseCloudinary])

  useEffect(async () => {
  }, [errors])

  const [input, setInput] = useState({
    title: '',
    cost: '',
    margin: '',
    price: '',
    description: '',
    image: '',
    disable: false,
    like: '',
    stock: '',
    diets: [],
    providers: [],
    categories: []
  });

  var suggested = (Math.round(((input?.cost) * (((input?.margin) / 100) + 1))));
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Provider');
    dispatch(postCloudinaryPhoto(data))
  };

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await openModal()
  };


  const handleClickYesNo = (e) => {
    if (e.target.value === 'yes') {
      if (Object.values(errors).length > 0) {
        toast("Please fill in all the fields", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
      else {
        console.log('handleSubmit ', { input });
        dispatch(postProduct(input));

        /**Clear */
        setInput({
          title: '',
          cost: '',
          margin: '',
          price: '',
          description: '',
          image: '',
          disable: false,
          like: '',
          stock: '',
          diet: [],
          categories: [],
          providers: [],
        })
      
        window.location.reload(false);
       
      }
    }
    closeModal()
  };

  /**Diet */
  function handleSelectDiets(e) {
    setInput({
      ...input,
      diets: Array.from(new Set([...input.diets, e.target.value]))
    });
  };

  /**Providers */
  function handleSelectProv(e) {
    setInput({
      ...input,
      providers: Array.from(new Set([...input.providers, e.target.value]))
    });
  };

  /**Categories */
  function handleSelectCate(e) {
    setInput({
      ...input,
      categories: Array.from(new Set([...input.categories, e.target.value]))
    });
  };

  function handleDelete(e) {
    e.preventDefault();
    let [name, value] = e.target.value.split('_'); console.log(value); console.log(name);
    if (name === 'diets') {
      let d = input.diets.filter((o) => o !== value);
      setInput({ ...input, diets: d, });
    };
    if (name === 'providers') {
      let dt = input.providers.filter((o) => o !== value);
      setInput({ ...input, providers: dt, });
    };
    if (name === 'categories') {
      let dt = input.categories.filter((o) => o !== value);
      setInput({ ...input, categories: dt, });
    };
  };

  return (
    <div className={styles.container}>
      <Modal className={sty.conteimodal} isOpen={isOpenModal} closeModal={closeModal}>
        <h1 className={sty.h1modal} > Create product: {input.title}</h1>

        <div className={sty.buttonModal}>
          <button id={sty.submit} className={styles.botonesformC}
            value="yes"
            onClick={(e) => handleClickYesNo(e)}

          >
            Yes
          </button>
          <button id={sty.submit} className={styles.botonesformC}
            value="no"
            onClick={(e) => handleClickYesNo(e)}

          >
            No
          </button>
          <ToastContainer/>
        </div>
      </Modal>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="Nombre">
          <label className={styles.title}>Name</label>

          <input
            id="title"
            className={styles.form_control}
            type="text"
            // placeholder="Product name"
            maxLength={50}
            autoFocus
            required={true}
            value={input.title}
            key="title"
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.title && <p className={styles.error}>{errors.title}</p>}
        </div>

        <div id="Costo_Margen">
          <div id="Cost">
            <label className={styles.title}>Provider price</label>
            <input
              id="cost"
              className={styles.form_control}
              type="number"
              // placeholder="5"
              value={input.cost}
              key="cost"
              name="cost"
              onChange={(e) => handleInputChange(e)}
            />
            {errors.cost && <p className={styles.error}>{errors.cost}</p>}
          </div>

          <div id="Margen">
            <label className={styles.title}>Margin</label>
            <input
              id="margin"
              className={styles.form_control}
              type="number"
              // placeholder="5"
              value={input.margin}
              key="margin"
              name="margin"
              onChange={(e) => handleInputChange(e)}
            />
            {errors.margin && <p className={styles.error}>{errors.margin}</p>}
          </div>
        </div>

        <div id="PrecioPublico">
          <label className={styles.title}>Retail Price</label>
          {suggested >= 0 && (
            <p className={styles.p_form}>Suggested integer: ${suggested}</p>
          )}
          <input
            id="price"
            className={styles.form_control}
            type="number"
            value={input.price}
            key="price"
            name="price"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.price && <p className={styles.error}>{errors.price}</p>}
        </div>

        <div id="Descripcion">
          <label className={styles.title}>Product description</label>
          <textarea
            id="description"
            className={styles.form_control}
            type="text"
            // placeholder="Choicely"
            required={true}
            maxLength={200}
            pattern={testDescription}
            value={input.description}
            key="description"
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.description && (
            <p className={styles.error}>{errors.description}</p>
          )}
        </div>

        <div id="Image">
          <label className={styles.title}>Product Image</label>
          <Container>
            <FormGroup>
              <Input
                type="file"
                name="image"
                placeholder="📷 Logo"
                onChange={(e) => uploadImage(e)}
                className={styles.upload}
              />
            </FormGroup>
          </Container>
        </div>

        <div id="Cantidad">
          <label className={styles.title}>Stock</label>
          <input
            id="stock"
            className={styles.form_control}
            type="number"
            // placeholder="🔢"
            required={true}
            value={input.stock}
            key="stock"
            name="stock"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.stock && <p className={styles.error}>{errors.stock}</p>}
        </div>
        {input.stock > 0 && (
          <div id="Status">
            <label className={styles.title}>Status: </label>
            <select
              onChange={(e) => handleInputChange(e)}
              name="disable"
              className={styles.seleSelect}
            >
              <option disabled>Status: </option>
              <option value={false}>Asset</option>
              <option value={true}>Inactive</option>
            </select>
          </div>
        )}
        <div className={styles.diet}>
          <select
            onChange={(e) => handleSelectDiets(e)}
            defaultValue="default"
            name="diet"
            className={styles.seleSelect}
          >
            <option value="default" disabled className={styles.seleOption}>
              Diets
            </option>
            {diet &&
              diet.map(
                (d) =>
                  d.name && (
                    <option
                      key={d.name}
                      value={d.name}
                      className={styles.seleOption}
                    >
                      {d.name}
                    </option>
                  )
              )}
          </select>
          {errors.diet && <p styles={{ float: "right" }}>{errors.diet}</p>}

          <div>
            {input.diets?.map((el, index) => (
              <div key={`o${index}`}>
                <button
                  value={`diets_${el}`}
                  onClick={(e) => handleDelete(e)}
                  className={styles.remove}
                >
                  {el}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.providers}>
          <select
            onChange={(e) => handleSelectProv(e)}
            defaultValue="default"
            className={styles.seleSelect}
          >
            <option 
              value="default" 
              disabled 
              className={styles.seleOption}>
              Providers
            </option>
            {provider &&
              provider.map(
                (prov) =>
                  prov.name && (
                    <option
                      key={prov.name}
                      value={prov.name}
                      className={styles.seleOption}
                    >
                      {prov.name}
                    </option>
                  )
              )}
          </select>
          {errors.diet && <p styles={{ float: "right" }}>{errors.diet}</p>}
          <div>
            {input.providers?.map((el, index) => (
              <div key={`o${index}`}>
                <button
                  value={`providers_${el}`}
                  onClick={(e) => handleDelete(e)}
                  className={styles.remove}
                >
                  {el}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.categories}>
          <select
            onChange={(e) => handleSelectCate(e)}
            defaultValue="default"
            className={styles.seleSelect}
          >
            <option value="default" disabled className={styles.seleOption}>
              Categories
            </option>
            {categories &&
              categories.map(
                (cate) =>
                  cate.name && (
                    <option
                      key={cate.name}
                      value={cate.name}
                      className={styles.seleOption}
                    >
                      {cate.name}
                    </option>
                  )
              )}
          </select>
          {errors.diet && <p styles={{ float: "right" }}>{errors.diet}</p>}

          <div className={styles.boxClose}>
            {input.categories?.map((el, index) => (
              <div className={styles.itemClose} key={`o${index}`}>
                <button
                  value={`categories_${el}`}
                  onClick={(e) => handleDelete(e)}
                  className={styles.remove}
                >
                  {el}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div id="Guardar" className="d-grid gap-2">
          <input
            id={styles.submit}
            className="btn btn-success"
            type="submit"
            value="Save"
            disabled={!input.title || !input.price ? true : false}
          />
        </div>
      </form>
    </div>
  );
}
