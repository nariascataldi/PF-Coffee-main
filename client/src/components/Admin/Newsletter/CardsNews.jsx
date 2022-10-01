import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories, getAllProducts, getAllUsers } from "../../../redux/actions";
import styles from './CardsNews.module.css'


export default function CardsNews (){
    let dispatch = useDispatch();
    let users = useSelector(state => state.users)
    let products = useSelector(state => state.products)
    let categories = useSelector(state => state.categories)
    let [checkedMails, setCheckedMails] = useState([])
    let [productOrCategory, setProductOrCategory] = useState('')

    React.useEffect(() => {
        console.log(checkedMails)
    },[checkedMails])

    React.useEffect(() => {
        console.log(productOrCategory)
    },[productOrCategory])

    React.useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getAllProducts())
        dispatch(getAllCategories())
    },[])

    const handleChangeProductOrCategory = (e) => {
        setProductOrCategory(e.target.value)
    }

    const handleClickCheck = async (e) => {
        if (e.target.checked) {
            setCheckedMails([...checkedMails, e.target.value])
        }
        else if (!e.target.checked) {
            setCheckedMails(checkedMails.filter(f => f !== e.target.value))
        }
    }

  return (
    <div>
        <section>
            <div>
                <h1>Create Offer</h1>
                <div className={styles.inputs}>
                    <label htmlFor="">Title:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Description:</label>
                    <input type="text" name="" id="" className={styles.inputDes}/>
                    <label htmlFor="">Sale:</label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <select onChange={(e) => handleChangeProductOrCategory(e)}>
                        <option value="">Select by Category or Product</option>
                        <option value="product">Product</option>
                        <option value="category">Category</option>
            </select>
            <div className={styles.parentScrolls}>
                {/* <h2>Select mails to send Newsletter</h2> */}
                <div className={styles.divScrollProducts}>
                {
                    users && users.map(p => (
                        <div>
                            mail: {p.mail}
                            <input type="checkbox" value={p.mail} onClick={(e) => handleClickCheck(e)}/>
                        </div>
                    ))
                }
                </div>
                <div>
                    <div>
                        {
                            productOrCategory === 'product' ?
                            products && 
                            (
                            <div className={styles.divScrollProducts}>
                                {
                                    products.map(p => (
                                            <div>
                                                {p.title}
                                            </div>
                                        ))
                                }
                            </div>)
                            :productOrCategory === 'category' ?
                            categories && 
                            (
                                <div className={styles.divScrollProducts}>
                                    {
                                    categories.map(c => (
                                        <div>
                                            {c.name}
                                        </div>
                                    ))
                                    }
                                </div>
                            )
                            :null
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}