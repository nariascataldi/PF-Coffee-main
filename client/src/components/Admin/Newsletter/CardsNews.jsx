import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories, getAllDiets, getAllProducts, getAllUsers } from "../../../redux/actions";
import styles from './CardsNews.module.css'


export default function CardsNews (){
    let dispatch = useDispatch();
    let users = useSelector(state => state.users)
    let products = useSelector(state => state.products)
    let categories = useSelector(state => state.categories)
    let diets = useSelector(state => state.diets)
    let [input, setInput] = useState({
        checkedMails: [],
        products: []
    })

    let [productOption, setProductOption] = useState('')

    React.useEffect(() => {
        console.log(input)
    },[input])

    React.useEffect(() => {
        console.log(productOption)
    },[productOption])

    React.useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getAllProducts())
        dispatch(getAllCategories())
        dispatch(getAllDiets())
    },[])

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
                checkedMails: JSON.parse(e.target.value).map(j => j.mail)
            })
        }
        else if (e.target.name === 'all' && !e.target.checked) {
            setInput({
                ...input,
                checkedMails: []
            })
        }
        else if (e.target.checked) {
            setInput({
                ...input,
                checkedMails: [...input.checkedMails, e.target.value]
            })
        }
        else if (!e.target.checked) {
            setInput({
                ...input,
                checkedMails: input.checkedMails.filter(f => f !== e.target.value)
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


  return (
    <div>
        <section>
            <div>
                <h1>Create Offer</h1>
                <div className={styles.inputs}>
                    <label>Title:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Description:</label>
                    <input type="text" name="" id="" className={styles.inputDes}/>
                    <label htmlFor="">Sale:</label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <select onChange={(e) => handleChangeProductOrCategory(e)}>
                        <option value="">Select by Category, Product or Diet</option>
                        <option value="product">Products</option>
                        <option value="category">Categories</option>
                        <option value="diet">Diets</option>
            </select>
            <div className={styles.parentScrolls}>
                {/* <h2>Select mails to send Newsletter</h2> */}
                <div className={styles.divScrollProducts}>
                    <label>select all</label>
                    <input type="checkbox" value={JSON.stringify(users)} name='all' onClick={(e) => handleClickMails(e)} checked={users && input.checkedMails.length === users.length?true:false}/>
                    {
                        users && users.map(p => (
                            <div>
                                mail: {p.mail}
                                <input type="checkbox" value={p.mail} onClick={(e) => handleClickMails(e)} checked={input.checkedMails.includes(p.mail)?true:false}/>
                            </div>
                        ))
                    }
                </div>
                <div>
                        {
                            productOption === 'product' ?
                            products && 
                            (
                                <div className={styles.divScrollProducts}>
                                <label>select all</label>
                                <input type="checkbox" value={JSON.stringify(products)} name='all' onClick={(e) => handleClickProducts(e)} checked={products && input.products.length === products.length?true:false}/>
                                {
                                    products.map(p => (
                                            <div>
                                                {p.title}
                                                <input type="checkbox" value={p.title} onClick={(e) => handleClickProducts(e)} checked={input.products.includes(p.title)?true:false}/>
                                            </div>
                                        ))
                                }
                            </div>
                            )
                            :productOption === 'category' ?
                            categories && 
                            (
                                <div className={styles.divScrollProducts}>
                                <label>select all</label>
                                <input type="checkbox" value={JSON.stringify(categories)} name='all' onClick={(e) => handleClickProducts(e)} checked={categories && input.products.length === categories.length?true:false}/>
                                    {
                                    categories.map(c => (
                                        <div>
                                            {c.name}
                                            <input type="checkbox" value={c.name} onClick={(e) => handleClickProducts(e)} checked={input.products.includes(c.name)?true:false}/>
                                        </div>
                                    ))
                                    }
                                </div>
                            )
                            :productOption === 'diet' ?
                            diets && 
                            (
                                <div className={styles.divScrollProducts}>
                                <label>select all</label>
                                <input type="checkbox" value={JSON.stringify(diets)} name='all' onClick={(e) => handleClickProducts(e)} checked={diets && input.products.length === diets.length?true:false}/>
                                    {
                                    diets.map(d => (
                                        <div>
                                            {d.name}
                                            <input type="checkbox" value={d.name} onClick={(e) => handleClickProducts(e)} checked={input.products.includes(d.name)?true:false}/>
                                        </div>
                                    ))
                                    }
                                </div>
                            )
                            :null
                        }
                </div>
            </div>
        </section>
    </div>
  );
}