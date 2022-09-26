import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';

import Cards from '../CardsAdmin/CardsAdmin.jsx';
import ProductAdmin from '../Product/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
import CrudApp from '../CRUD/CrudAppProduct.js';
import SearchBar from '../../SearchBar';

import "bootstrap/dist/css/bootstrap.min.css";
import style from '../../../styles/Admin/HomeAdm.module.css';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default function HomeAdmin() {
  //---SearchBar---
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  return (
    <div className={style.home_container}>
      <NavBarAdmin/>
      <Tab.Container id="left-tabs-example" defaultActiveKey="homeAdmin">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="homeAdmin">Home Admin</Nav.Link>
              </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="prodCreate">Create Product</Nav.Link> </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="prodEdit">Edit Product</Nav.Link> </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="homeAdmin">
              <SearchBar />
                <Cards />
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