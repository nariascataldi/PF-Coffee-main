import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';
import Cards from '../CardsAdmin/CardsAdmin.jsx';
import ProductAdmin from '../FormProduct/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
import NavBarAdminIzq from '../NavBarAdmin/NavBarAdminIzq';
// import CardsAdmin from '../CardsAdmin/CardsAdmin';

import './HomeAdm.css'

export default function HomeAdmin() {
  const dispatch = useDispatch();
  let allProducts = useSelector(state => state.allProducts)

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  const [able, setAble] = useState(false)
  function handleOnChange(e) {
    e.preventDefault();
    setAble({
      ...able,
      [e.target.name]: e.target.value
    });

  }


  return (

    <div className='home-container'>
      <NavBarAdmin></NavBarAdmin>
      <div className="container my-3 py-5">
        <div className="row">
          <div id='NavBarIzq' className="col-sm-12 col-md-2 col-lg-2 col-xl-2 py-4 bg-white">
            <NavBarAdminIzq />
          </div>
          <div id='Productos' className="col-sm-12 col-md-10 col-lg-10 col-xl-10 py-4 bg-white">
            <div id="Desactivo" className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                value={able}
                onChange={e => handleOnChange(e)}
              />
              <label
                className="form-check-label"
              >Disable</label>
            </div>
            {!able &&
              <Cards></Cards>}
            {able &&
              <ProductAdmin></ProductAdmin>
            }
          </div>
        </div>
      </div>
    </div>
  )
}