import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Container, FormGroup, Input } from "reactstrap";

import { 
    getAllCategories, 
    getAllDiets, 
    getAllNewsletter, 
    getAllProducts, 
    postCloudinaryPhoto, 
    postOferts } from "../../../redux/actions";

import styles from './CardsNews.module.css'


export default function Newsletter (){
    let dispatch = useDispatch();
    let newsletter = useSelector(state => state.newsletter)
    let products = useSelector(state => state.products)
    let categories = useSelector(state => state.categories)
    let diets = useSelector(state => state.diets)
    let responseCloudinary = useSelector(state => state.responseCloudinary)
    let [input, setInput] = useState({
        title: '',
        description: '',
        disable: false,
        sale: '',
        newsletters: [],
        products: [],
        categories: [],
        diets: [],
    })

    let [productOption, setProductOption] = useState('')

    React.useEffect(() => {
        console.log(input)
    },[input])

    React.useEffect(() => {
        console.log(productOption)
    },[productOption])

    React.useEffect(() => {
        dispatch(getAllNewsletter())
        dispatch(getAllProducts())
        dispatch(getAllCategories())
        dispatch(getAllDiets())
    },[])

    const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'Provider');
      await dispatch(postCloudinaryPhoto(data))
    }
  

    const handleChangeInput = async (e) => {
        await setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    } 

    const handleChangeProductOrCategory = async (e) => {
        await setInput({
            ...input,
            products: []
        })
        setProductOption(e.target.value)
    }

    const handleClickMails = async (e) => {
        if (e.target.name === 'all' && e.target.checked) {
            console.log(e.target.name)
            setInput({
                ...input,
                newsletters: JSON.parse(e.target.value).map(j => j.mail)
            })
        }
        else if (e.target.name === 'all' && !e.target.checked) {
            setInput({
                ...input,
                newsletters: []
            })
        }
        else if (e.target.checked) {
            setInput({
                ...input,
                newsletters: [...input.newsletters, e.target.value]
            })
        }
        else if (!e.target.checked) {
            setInput({
                ...input,
                newsletters: input.newsletters.filter(f => f !== e.target.value)
            })
        }
    }

    const handleClickProducts = (e) => {
        if (e.target.name === 'all' && e.target.checked) {
            console.log(e.target.name)
            setInput({
                ...input,
                products: JSON.parse(e.target.value).map(j => j.title ? j.title:j.name)
            })
        }
        else if (e.target.name === 'all' && !e.target.checked) {
            setInput({
                ...input,
                products: []
            })
        }
        else if (e.target.checked) {
            setInput({
                ...input,
                products: [...input.products, e.target.value]
            })
        }
        else if (!e.target.checked) {
            setInput({
                ...input,
                products: input.products.filter(f => f !== e.target.value)
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (productOption !== 'products') {
            dispatch(postOferts({
                ...input,
                products: [],
                image: responseCloudinary.url,
                [productOption]: input.products
            }))
        }
        else dispatch(postOferts({...input, image: responseCloudinary.url}))
         toast("Offer created successfully", {
           position: "top-right",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });
        setInput({
            title: '',
            description: '',
            disable: false,
            sale: '',
            newsletters: [],
            products: [],
            dateStart: '',
            dateEnd: ''
        })
    }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h1 className={styles.title}>Create Offer</h1>

          <div className={styles.inputs}>
            <label className={styles.title}>Title</label>
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={(e) => handleChangeInput(e)}
            />
            <label className={styles.title}>Description</label>
            <textarea
              name="description"
              value={input.description}
              className={styles.inputDes}
              onChange={(e) => handleChangeInput(e)}
            />
            <label className={styles.title}>Sale</label>
            <input
              type="text"
              name="sale"
              placeholder="% of discount"
              value={input.sale}
              onChange={(e) => handleChangeInput(e)}
            />
            <label className={styles.title}>Starting Date</label>
              <input
                type="date"
                name="dateStart"
                value={input.dateStart}
                onChange={(e) => handleChangeInput(e)}
              />
            <label className={styles.title}>Ending Date</label>
              <input
                type="date"
                name="dateEnd"
                value={input.dateEnd}
                onChange={(e) => handleChangeInput(e)}
              />
            <label className={styles.title}>Image</label>
            <Container>
                <p>Uploading images</p>
                <FormGroup>
                  <Input
                    type="file"
                    name="file"
                    placeholder="Image"
                    onChange={uploadImage}
                  />
                </FormGroup>
              </Container>
          </div>
        </div>
        <select
          onChange={(e) => handleChangeProductOrCategory(e)}
          className={styles.seleSelect}
        >
          <option value="">Select by Category, Product or Diet</option>
          <option value="products">Products</option>
          <option value="categories">Categories</option>
          <option value="diets">Diets</option>
        </select>

        <div>
          <div className={styles.divScrollProducts}>
            <label className={styles.parentScrolls}>select all</label>
            <input
              className={styles.input}
              type="checkbox"
              value={JSON.stringify(newsletter)}
              name="all"
              onClick={(e) => handleClickMails(e)}
              checked={
                newsletter && input.newsletters.length === newsletter.length
                  ? true
                  : false
              }
            />
            {newsletter &&
              newsletter.map((p) => (
                <div>
                  {p.mail}
                  <input
                    type="checkbox"
                    value={p.mail}
                    onClick={(e) => handleClickMails(e)}
                    checked={input.newsletters.includes(p.mail) ? true : false}
                  />
                </div>
              ))}
          </div>
          <div>
            {productOption === "products"
              ? products && (
                  <div className={styles.divScrollProducts}>
                    <label>select all</label>
                    <input
                      type="checkbox"
                      value={JSON.stringify(products)}
                      name="all"
                      onClick={(e) => handleClickProducts(e)}
                      checked={
                        products && input.products.length === products.length
                          ? true
                          : false
                      }
                    />
                    {products.map((p) => (
                      <div>
                        {p.title}
                        <input
                          type="checkbox"
                          value={p.title}
                          onClick={(e) => handleClickProducts(e)}
                          checked={
                            input.products.includes(p.title) ? true : false
                          }
                        />
                      </div>
                    ))}
                  </div>
                )
              : productOption === "categories"
              ? categories && (
                  <div className={styles.divScrollProducts}>
                    <label>select all</label>
                    <input
                      type="checkbox"
                      value={JSON.stringify(categories)}
                      name="all"
                      onClick={(e) => handleClickProducts(e)}
                      checked={
                        categories &&
                        input.products.length === categories.length
                          ? true
                          : false
                      }
                    />
                    {categories.map((c) => (
                      <div>
                        {c.name}
                        <input
                          type="checkbox"
                          value={c.name}
                          onClick={(e) => handleClickProducts(e)}
                          checked={
                            input.products.includes(c.name) ? true : false
                          }
                        />
                      </div>
                    ))}
                  </div>
                )
              : productOption === "diets"
              ? diets && (
                  <div className={styles.divScrollProducts}>
                    <label>select all</label>
                    <input
                      type="checkbox"
                      value={JSON.stringify(diets)}
                      name="all"
                      onClick={(e) => handleClickProducts(e)}
                      checked={
                        diets && input.products.length === diets.length
                          ? true
                          : false
                      }
                    />
                    {diets.map((d) => (
                      <div>
                        {d.name}
                        <input
                          type="checkbox"
                          value={d.name}
                          onClick={(e) => handleClickProducts(e)}
                          checked={
                            input.products.includes(d.name) ? true : false
                          }
                        />
                      </div>
                    ))}
                  </div>
                )
              : null}
          </div>
        </div>
        <input type="submit" className={styles.button} />
        <ToastContainer/>
      </form>
    </div>
  );
}