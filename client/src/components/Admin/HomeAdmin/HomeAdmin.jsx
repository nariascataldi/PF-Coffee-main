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

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';





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
      <Tab.Container id="left-tabs-example" defaultActiveKey="homeAdmin">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="homeAdmin">Home Admin</Nav.Link>
              </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="prodCreate">Create Product</Nav.Link> </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="prodEdit">Edit Product</Nav.Link> </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="homeAdmin">
                <div>
                  <form className={style.searchBar} onSubmit={(e) => handleSubmit(e)}>
                    <input className={style.input_search} type='text' name='title' onChange={d => handleOnChange(d)} value={busqueda} placeholder='Search...' />
                    <button className={style.search_button} type='submit'><BsSearch /></button>
                  </form>
                  <Cards />
                </div>

              </Tab.Pane>
              <Tab.Pane eventKey="prodCreate"> <ProductAdmin /> </Tab.Pane>
              <Tab.Pane eventKey="prodEdit"> <CrudApp />  </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  )
}