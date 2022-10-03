import React from "react"
import {Link} from 'react-router-dom'
import FormModifyProvider from './UpdateProfile'
import Orders from './Order'
import Profile from './Profile'
import NavBar from "../Admin/NavBarAdmin/NavBarAdmin"


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

import "bootstrap/dist/css/bootstrap.min.css";
import style from '../../styles/Admin/HomeAdm.module.css';


function ProfileUser(){
return(
    <div className={style.home_container}> 
      <div className={style.conteinTabla}>
        <NavBar></NavBar>
        <Tab.Container id="left-tabs-example" defaultActiveKey="profileUser">
          <Row className={style.rowcon}>
            <Col sm={2} className={style.colum2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className={style.bonton} > <Nav.Link eventKey="profile">Profile</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton} > <Nav.Link eventKey="algo">Algo</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton} > <Nav.Link eventKey="ordenes">Ordenes</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton} > <Nav.Link eventKey="modifyUser">Modify Profile</Nav.Link> </Nav.Item>
              </Nav>
            </Col>
            <Col sm={1} ></Col>
            <Col sm={9} className={style.colum10}>
              <Tab.Content>
              <Tab.Pane eventKey="profile"> <Profile></Profile> </Tab.Pane>
              <Tab.Pane eventKey="algo"> <h1>algo</h1><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas esse cum in laborum aliquam mollitia et at maiores, magnam nemo tempore repellat sapiente beatae eos sit vero dolorem dicta.
                Magni quibusdam, aut quisquam, labore laudantium ullam obcaecati explicabo nisi minus ratione corrupti ea unde eius. Exercitationem ea, at deserunt ad ipsam nam libero odio. Nemo hic quisquam fugiat assumenda. </Tab.Pane>
              <Tab.Pane eventKey="ordenes"> <Orders></Orders> </Tab.Pane>
              <Tab.Pane eventKey="modifyUser"> <FormModifyProvider></FormModifyProvider> </Tab.Pane>
                
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
)
}
//
export default ProfileUser;