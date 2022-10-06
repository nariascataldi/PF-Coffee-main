import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, postNewsletter } from '../../../redux/actions/index.js';
import logo from '../../../assets/logo_coffee.png'

import Cards from '../CardsAdmin/CardsAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';

import SearchBar from '../../SearchBar';

import "bootstrap/dist/css/bootstrap.min.css";
import style from '../../../styles/Admin/HomeAdm.module.css';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Figure from 'react-bootstrap/Figure';


import Newsletter from '../Newsletter/Newsletter.jsx';
import OrdersHistory from '../Orders/OrdersHistory.jsx'
import Product from '../Product/Product.jsx';
import Provider from '../../Provider/ProvHome.jsx';
import ViewOferts from '../Newsletter/ViewOferts.jsx'


export default function HomeAdmin() {
  //---SearchBar---
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])


  return (
    <div className={style.home_container}>
      <NavBarAdmin />
      <div className={style.figpos}>
        <Figure>
          <Figure.Image className={style.figulog} width={17 * 5} height={18 * 5} alt="El Logo" src={logo} />
        </Figure>
      </div>
      <div className={style.conteinTabla}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="homeAdmin">
          <Row className={style.rowcon}>
            <Col sm={2} className={style.colum2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className={style.bonton} > <Nav.Link eventKey="homeAdmin">Home Admin</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton}> <Nav.Link eventKey="prod">Product</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton}> <Nav.Link eventKey="prov">Provider</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton}> <Nav.Link eventKey="mailNews">Create Offer</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton}> <Nav.Link eventKey="viewOferts">View Offer</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton}> <Nav.Link eventKey="orders">Order's History</Nav.Link> </Nav.Item>
              </Nav>
            </Col>
            <Col sm={1} ></Col>
            <Col sm={9} className={style.colum10}>
              <Tab.Content>
                <Tab.Pane eventKey="homeAdmin"> <SearchBar /> <Cards /> </Tab.Pane>
                <Tab.Pane eventKey="prod"> <Product />  </Tab.Pane>
                <Tab.Pane eventKey="prov"> <Provider />  </Tab.Pane>
                <Tab.Pane eventKey="mailNews"> <Newsletter />  </Tab.Pane>
                <Tab.Pane eventKey="orders"> <OrdersHistory />  </Tab.Pane>
                <Tab.Pane eventKey="viewOferts"> <ViewOferts />  </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  )
}