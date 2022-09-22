import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';
import Cards from '../CardsAdmin/CardsAdmin.jsx';
import ProductAdmin from '../Product/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
// import { useForm } from "react-hook-form";
import CrudApp from '../CRUD/CrudAppProduct.js';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../../styles/Admin/HomeAdm.css'

export default function HomeAdmin() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  // const { watch, register } = useForm({
  //   defaultValues: {
  //     homeAdmin: true
  //   }
  // })

  const [framework, setFramework] = useState('homeAdmin');

  const cambioRadioFramework = e => {
    setFramework(e.target.value);
  }
  // const homeAdmin = watch('homeAdmin');
  // const product = watch('product');
  // const productEdit = watch('productEdit');
  // const provider = watch('provider');
  // const user = watch('user');
  // const finance = watch('finance');
  // const todo = watch('todo');

  return (
    <div className='home-container'>
      <NavBarAdmin></NavBarAdmin>
      <div className="container my-3 py-5">
        <div className="row">
          <div id='NavBarIzq' className="col-sm-12 col-md-1 col-lg-1 col-xl-1 py-4 bg-white">
            <div className="row">
              <div className="col-12">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <label for='radioHomeAdmin'>Home</label>
                  <input
                    id='radioHomeAdmin'
                    value="homeAdmin"
                    checked={framework == 'homeAdmin' ? true : false}
                    type="radio"
                    onChange={cambioRadioFramework}
                  />
                  <label for='radioProduct' >Product</label>
                  <input
                    id='radioProduct'
                    value="product"
                    checked={framework == 'product' ? true : false}
                    type="radio"
                    onChange={cambioRadioFramework}
                  />
                  <label for='radioProductEdit' >ProductEdit</label>
                  <input
                    id='radioProductEdit'
                    value="productEdit"
                    checked={framework == 'productEdit' ? true : false}
                    type="radio"
                    onChange={cambioRadioFramework}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id='Productos' className="col-sm-12 col-md-11 col-lg-11 col-xl-11 py-4 bg-white">
            {framework === 'homeAdmin' && <Cards />}
            {framework === 'product' && <ProductAdmin />}
            {framework == 'productEdit' && <CrudApp />}
            {/* {provider}
            {user}
            {finance}
            {todo} */}
          </div>
        </div>
      </div>
    </div>
  )
}