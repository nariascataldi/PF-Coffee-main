import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, postNewsletter } from '../../../redux/actions/index.js';

import Cards from '../CardsAdmin/CardsAdmin.jsx';
import ProductAdmin from '../Product/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';

import SearchBar from '../../SearchBar';

import "bootstrap/dist/css/bootstrap.min.css";
import style from '../../../styles/Admin/HomeAdm.module.css';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import FormProvider from '../../Provider/CRUD Provider/PrividerCreate';
import Newsletter from '../Newsletter/Newsletter.jsx';
import OrdersHistory from '../Orders/OrdersHistory.jsx'
import Product from '../Product/Product.jsx';
import Provider from '../../Provider/ProvHome.jsx';


export default function HomeAdmin() {
  //---SearchBar---
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])


  return (
    <div className={style.home_container}>
      <NavBarAdmin />
      <Tab.Container id="left-tabs-example" defaultActiveKey="homeAdmin">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item> <Nav.Link eventKey="homeAdmin">Home Admin</Nav.Link> </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="prod">Product</Nav.Link> </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="prov">Provider</Nav.Link> </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="mailNews">Send Newsletter</Nav.Link> </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="orders">Order's History</Nav.Link> </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="homeAdmin"> <SearchBar /> <Cards /> </Tab.Pane>
              <Tab.Pane eventKey="prod"> <Product />  </Tab.Pane>
              <Tab.Pane eventKey="prov"> <Provider />  </Tab.Pane>
              <Tab.Pane eventKey="mailNews"> <Newsletter />  </Tab.Pane>
              <Tab.Pane eventKey="orders"> <OrdersHistory />  </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  )
}