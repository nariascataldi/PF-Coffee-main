import React , {useState} from 'react';
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
import ListProducts from '../Product/CRUD Product/ListProduct';
import ListProviders from '../../Provider/CRUD Provider/ListProvider.jsx';
import FormProvider from '../../Provider/CRUD Provider/PrividerCreate';
// import Providers from '../../Provider/Providers.jsx';

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
              {/* <Nav.Item> <Nav.Link eventKey="provList">Provider</Nav.Link> </Nav.Item> */}
              <Nav.Item> <Nav.Link eventKey="addProvider">Crear Provider</Nav.Link> </Nav.Item>
              <Nav.Item> <Nav.Link eventKey="provEdit">Edit Provider</Nav.Link> </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="homeAdmin">
              <SearchBar />
                <Cards />
              </Tab.Pane>
              <Tab.Pane eventKey="prodCreate"> <ProductAdmin /> </Tab.Pane>
              <Tab.Pane eventKey="prodEdit"> <ListProducts />  </Tab.Pane>
              {/* <Tab.Pane eventKey="provList"> <Providers />  </Tab.Pane> */}
              <Tab.Pane eventKey="addProvider"> <FormProvider />  </Tab.Pane>
              <Tab.Pane eventKey="provEdit"> <ListProviders />  </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  )
}