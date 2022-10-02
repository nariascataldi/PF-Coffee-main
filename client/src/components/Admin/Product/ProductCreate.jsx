import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDiets,
  postProduct,
  getAllProviders,
  getAllCategories,
  postCloudinaryPhoto,
} from "../../../redux/actions"; //2
// import { useNavigate } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

import style from "../../../styles/Admin/ProductCreate.module.css";
import { Container, FormGroup, Input, Modal } from "reactstrap";
import { useModal } from "../../../hooks/UseModal";
import { ToastContainer, toast } from "react-toastify";

var testName = /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/;
var testDescription = /^[A-Za-z]+$/i;

function validate(input) {
  let errors = {};

  if (!input.title) errors.title = "Enter product name";
  if (!testName.test(input.title))
    errors.title =
      'Start the name with capital letter. Only characters "":.,_- are accepted';
  if (100 <= [input.title].length) errors.title = "Not exceed 100 characters";

  if (!input.cost) errors.cost = "Enter a cost from provider";

  if (!input.margin) errors.margin = "Enter a margin of the product";

  if (!input.price) errors.price = "Enter a price of the product";

  if (!input.description)
    errors.description = "Enter a description of the product";

  if (!input.stock) errors.stock = `Enter a number of product`;

  if (![input.diet].length) errors.diet = "Choose at least one type of diet";

  return errors;
}

export default function FormProduct() {
  const dispatch = useDispatch();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  var diet = useSelector((state) => state.diets);
  console.log({ diet });
  var provider = useSelector((state) => state.providers);
  console.log({ provider });
  var categories = useSelector((state) => state.categories);
  let responseCloudinary = useSelector((state) => state.responseCloudinary);

  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllDiets());
    dispatch(getAllProviders());
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(async () => {
    setInput({
      ...input,
      image: responseCloudinary.url,
    });
    setErrors(
      validate({
        ...input,
        image: responseCloudinary.url,
      })
    );
  }, [responseCloudinary]);

  useEffect(async () => {
    // console.log(errors)
  }, [errors]);

  const [input, setInput] = useState({
    title: "",
    cost: "",
    margin: "",
    price: "",
    description: "",
    image: "",
    disable: false,
    like: "",
    stock: "",
    diets: [],
    providers: [],
    categories: [],
  });
  var suggested = Math.round(input?.cost * (input?.margin / 100 + 1));
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Provider");
    dispatch(postCloudinaryPhoto(data));
  };
  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await openModal();

    // if (Object.values(errors).length > 0) {
    //   // console.log('handleSubmit ', { errors });
    // }
    // else {
    //   console.log('handleSubmit ', { input });
    //   dispatch(postProduct(input));
    //   /**Clear */
    //   setInput({
    //     title: '',
    //     cost: '',
    //     margin: '',
    //     price: '',
    //     description: '',
    //     image: '',
    //     disable: false,
    //     like: '',
    //     stock: '',
    //     diet: [],
    //   })
    //   e.target.reset();
    //   window.location.reload(false);
    // navigate('/homeAdmin');
    // }
  }

  const handleClickYesNo = (e) => {
    if (e.target.value === "yes") {
      if (Object.values(errors).length > 0) {

        toast("Please fill in all the fields", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.log("handleSubmit ", { input });
        dispatch(postProduct(input));
      
        setInput({
          title: "",
          cost: "",
          margin: "",
          price: "",
          description: "",
          image: "",
          disable: false,
          like: "",
          stock: "",
          diet: [],
          categories: [],
          providers: [],
        });
        // e.target.reset();
        window.location.reload(false);
        // navigate('/homeAdmin');
      }
    }
    closeModal();
  };
  /**Diet */
  function handleSelectDiets(e) {
    // console.log('Handle ', e.target.value);
    setInput({
      ...input,
      diets: Array.from(new Set([...input.diets, e.target.value])),
    });
  }
  /**Providers */
  function handleSelectProv(e) {
    // console.log('HandlePro ', e.target.value);
    setInput({
      ...input,
      providers: Array.from(new Set([...input.providers, e.target.value])),
    });
  }
  /**Categories */
  function handleSelectCate(e) {
    // console.log('HandleCat ', e.target.value);
    setInput({
      ...input,
      categories: Array.from(new Set([...input.categories, e.target.value])),
    });
  }
  function handleDelete(e) {
    e.preventDefault();
    let [name, value] = e.target.value.split("_");
    console.log(value);
    console.log(name);
    if (name === "diets") {
      let d = input.diets.filter((o) => o !== value);
      setInput({ ...input, diets: d });
    }
    if (name === "providers") {
      let dt = input.providers.filter((o) => o !== value);
      setInput({ ...input, providers: dt });
    }
    if (name === "categories") {
      let dt = input.categories.filter((o) => o !== value);
      setInput({ ...input, categories: dt });
    }
  }

  return (
    <>
      {/* {console.log(input)} */}
      {/* <h2>Product</h2> */}
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h1 className="">Create product: {input.title}</h1>
        <div class="d-flex justify-content-evenly">
          <button
            value="yes"
            onClick={(e) => handleClickYesNo(e)}
            class="border-0"
          >
            Yes
          </button>
          <ToastContainer />
          <button
            value="no"
            onClick={(e) => handleClickYesNo(e)}
            class="border-0"
          >
            No
          </button>
          <ToastContainer />
        </div>
      </Modal>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="Nombre" className="mb-3">
          <label className="form-label">Name</label>
          <input
            id="title"
            className={style.form_control}
            type="text"
            placeholder="Product name"
            maxLength={50}
            autoFocus
            required={true}
            value={input.title}
            key="title"
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div id="Costo_Margen" className="row">
          <div id="Cost" className="col">
            <label className="form-label">Provider price</label>
            <input
              id="cost"
              className={style.form_control}
              type="number"
              placeholder="5"
              value={input.cost}
              key="cost"
              name="cost"
              onChange={(e) => handleInputChange(e)}
            />
            {errors.cost && <p>{errors.cost}</p>}
          </div>
          <div id="Margen" className="col">
            <label className="form-label">Margin</label>
            <input
              id="margin"
              className={style.form_control}
              type="number"
              placeholder="5"
              value={input.margin}
              key="margin"
              name="margin"
              onChange={(e) => handleInputChange(e)}
            />
            {errors.margin && <p>{errors.margin}</p>}
          </div>
        </div>
        <div id="PrecioPublico" className="mb-3">
          <label className="form-label">Retail Price</label>
          {suggested >= 0 && (
            <p className={style.p_form}>Suggested integer: ${suggested}</p>
          )}
          <input
            id="price"
            className={style.form_control}
            type="number"
            value={input.price}
            key="price"
            name="price"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.price && <p>{errors.price}</p>}
        </div>
        <div id="Descripcion" className="mb-3">
          <label className="form-label">Product description</label>
          <textarea
            id="description"
            className={style.form_control}
            type="text"
            placeholder="Choicely"
            required={true}
            maxLength={200}
            pattern={testDescription}
            value={input.description}
            key="description"
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div id="Image" className="mb-3">
          <label className="form-label">Product Image</label>
          {/* <input
            id="image"
            className={style.form_control}
            type="url"
            placeholder="📷 URL"
            maxLength={200}
            value={input.image}
            key='image'
            name="image"
            onChange={e => handleInputChange(e)}
          /> */}
          <Container>
            <p>Subiendo imagenes</p>
            <FormGroup>
              <Input
                type="file"
                name="image"
                placeholder="📷 Logo"
                onChange={(e) => uploadImage(e)}
                className={style.upload}
              />
            </FormGroup>
          </Container>
          {/* {errors.image && <p className={style.p_form}>{errors.image}</p>} */}
        </div>
        <div id="Cantidad" className="mb-3">
          <label className="form-label">Stock</label>
          <input
            id="stock"
            className={style.form_control}
            type="number"
            placeholder="🔢"
            required={true}
            value={input.stock}
            key="stock"
            name="stock"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.stock && <p className={style.p_form}>{errors.stock}</p>}
        </div>
        {input.stock > 0 && (
          <div id="Status">
            <label>Status: </label>
            <select onChange={(e) => handleInputChange(e)} name="disable">
              <option disabled>Status: </option>
              <option value={false}>Asset</option>
              <option value={true}>Inactive</option>
            </select>
          </div>
        )}
        <div className={style.diet}>
          <select
            onChange={(e) => handleSelectDiets(e)}
            defaultValue="default"
            name="diet"
            className={style.seleSelect}
          >
            <option value="default" disabled className={style.seleOption}>
              Choose diet
            </option>
            {diet &&
              diet.map(
                (d) =>
                  d.name && (
                    <option
                      key={d.name}
                      value={d.name}
                      className={style.seleOption}
                    >
                      {d.name}
                    </option>
                  )
              )}
          </select>
          {errors.diet && <p style={{ float: "right" }}>{errors.diet}</p>}
          <div className={style.boxClose}>
            {input.diets?.map((el, index) => (
              <div className={style.itemClose} key={`o${index}`}>
                <p>{el}</p>
                <button value={`diets_${el}`} onClick={(e) => handleDelete(e)}>
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={style.providers}>
          <select
            onChange={(e) => handleSelectProv(e)}
            defaultValue="default"
            className={style.seleSelect}
          >
            <option value="default" disabled className={style.seleOption}>
              Choose Provider
            </option>
            {provider &&
              provider.map(
                (prov) =>
                  prov.name && (
                    <option
                      key={prov.name}
                      value={prov.name}
                      className={style.seleOption}
                    >
                      {prov.name}
                    </option>
                  )
              )}
          </select>
          {errors.diet && <p style={{ float: "right" }}>{errors.diet}</p>}
          <div className={style.boxClose}>
            {input.providers?.map((el, index) => (
              <div className={style.itemClose} key={`o${index}`}>
                <p>{el}</p>
                <button
                  value={`providers_${el}`}
                  onClick={(e) => handleDelete(e)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={style.categories}>
          <select
            onChange={(e) => handleSelectCate(e)}
            defaultValue="default"
            className={style.seleSelect}
          >
            <option value="default" disabled className={style.seleOption}>
              Choose Categorie
            </option>
            {categories &&
              categories.map(
                (cate) =>
                  cate.name && (
                    <option
                      key={cate.name}
                      value={cate.name}
                      className={style.seleOption}
                    >
                      {cate.name}
                    </option>
                  )
              )}
          </select>
          {errors.diet && <p style={{ float: "right" }}>{errors.diet}</p>}
          <div className={style.boxClose}>
            {input.categories?.map((el, index) => (
              <div className={style.itemClose} key={`o${index}`}>
                <p>{el}</p>
                <button
                  value={`categories_${el}`}
                  onClick={(e) => handleDelete(e)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div id="Guardar" className="d-grid gap-2">
          <input
            id={style.submit}
            className="btn btn-success"
            type="submit"
            value="Save"
            disabled={!input.title || !input.price ? true : false}
          />
        </div>
      </form>
    </>
  );
}
