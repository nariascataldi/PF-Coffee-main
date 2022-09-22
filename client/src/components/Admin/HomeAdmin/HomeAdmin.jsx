import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getByTitle, setFilterState } from '../../../redux/actions/index.js';

import Cards from '../CardsAdmin/CardsAdmin.jsx';
import ProductAdmin from '../Product/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
import CrudApp from '../CRUD/CrudAppProduct.js';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../../styles/Admin/HomeAdm.css';
import style from '../../../styles/Admin/NavBarAdm.module.css';
import { BsSearch } from 'react-icons/bs';


export default function HomeAdmin() {
  const dispatch = useDispatch();
  const [busqueda, setBusqueda] = useState('');

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  const [framework, setFramework] = useState('homeAdmin');

  const cambioRadioFramework = e => {
    setFramework(e.target.value);
  }
  const handleOnChange = (d) => {
    setBusqueda(d.target.value)
    dispatch(getByTitle(busqueda));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilterState({ title: busqueda }));
    setBusqueda('')
  }
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
            {framework === 'homeAdmin' &&
              <div>
                <form className={style.searchBar} onSubmit={(e) => handleSubmit(e)}>
                  <input className={style.input_search} type='text' name='title' onChange={d => handleOnChange(d)} value={busqueda} placeholder='Search...' />
                  <button className={style.search_button} type='submit'><BsSearch /></button>
                </form>
                <Cards />
              </div>
            }
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