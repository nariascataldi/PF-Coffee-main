import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';
import Cards from '../CardsAdmin/CardsAdmin.jsx';
import ProductAdmin from '../Product/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
import { useForm } from "react-hook-form";
import CrudApp from '../CRUD/CrudAppProduct.js';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../../styles/Admin/HomeAdm.css'

export default function HomeAdmin() {
  const dispatch = useDispatch();

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
  const productEdit = watch('productEdit');
  const provider = watch('provider');
  const user = watch('user');
  const finance = watch('finance');
  const todo = watch('todo');

  return (
    <div className='home-container'>
      <NavBarAdmin></NavBarAdmin>
      <div className="container my-3 py-5">
        <div className="row">
          <div id='NavBarIzq' className="col-sm-12 col-md-1 col-lg-1 col-xl-1 py-4 bg-white">
            <div className="row">
              <div className="col-12">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <label >Home</label>
                  <input type="checkbox" {...register("homeAdmin")} />
                  <label >Product</label>
                  <input type="checkbox" {...register("product")} />
                  <label >ProductEdit</label>
                  <input type="checkbox" {...register("productEdit")} />
                </div>
              </div>
            </div>
          </div>
          <div id='Productos' className="col-sm-12 col-md-11 col-lg-11 col-xl-11 py-4 bg-white">
            {homeAdmin && <Cards />}
            {product && <ProductAdmin />}
            {productEdit && <CrudApp />}
            {provider}
            {user}
            {finance}
            {todo}
          </div>
        </div>
      </div>
    </div>
  )
}