import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';
import { NavLink } from 'react-router-dom';
import Cards from '../CardsAdmin/CardsAdmin.jsx';
import ProductAdmin from '../FormProduct/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
import { useForm } from "react-hook-form";


import './HomeAdm.css'

export default function HomeAdmin() {
  const dispatch = useDispatch();
  let allProducts = useSelector(state => state.allProducts)

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  const { watch, register } = useForm({
    defaultValues: {
      homeAdmin: true
    }
  })

  const homeAdmin = watch('homeAdmin');
  const product = watch('product');


  return (
    <div className='home-container'>
      <NavBarAdmin></NavBarAdmin>
      <div className="container my-3 py-5">
        <div className="row">
          <div id='NavBarIzq' className="col-sm-12 col-md-2 col-lg-2 col-xl-2 py-4 bg-white">
            <div className="row">
              <div className="col-12">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                  <div >
                    <label >Home</label>
                    <input
                      type="checkbox"
                      {...register("homeAdmin",
                      

                      )}
                    />
                  </div>
                  <div >
                    <label >Product</label>
                    <input
                      type="checkbox"
                      {...register("product")}
                    />
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div id='Productos' className="col-sm-12 col-md-10 col-lg-10 col-xl-10 py-4 bg-white">

            {homeAdmin &&
              <Cards></Cards>}
            {product &&
              <ProductAdmin></ProductAdmin>
            }
          </div>
        </div>
      </div>
    </div>
  )
}