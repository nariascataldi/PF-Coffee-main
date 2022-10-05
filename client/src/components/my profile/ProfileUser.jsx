import React from "react"
import {Link} from 'react-router-dom'
import FormModifyProvider from './UpdateProfile'
import Orders from './Order'
//import Profile from './Profile'
import NavBar from "../NavBar"
import logo from '../../assets/logo_coffee.png'


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Figure from 'react-bootstrap/Figure'

import "bootstrap/dist/css/bootstrap.min.css";
import style from '../../styles/Admin/HomeAdm.module.css';





function ProfileUser(){
  

return(
    <div className={style.home_container}> 
      <div className={style.conteinTabla}>
        <NavBar noFilters/>
        <div className={style.figpos}>
        <Figure>
          <Figure.Image className={style.figulog} width={17 * 5} height={18 * 5} alt="El Logo" src={logo} />
        </Figure>
      </div>
      <div className={style.cont}>
        <FormModifyProvider></FormModifyProvider>
      </div>
      </div>
    </div>
)
}
//
{
  /*

          <Tab.Container id="left-tabs-example" defaultActiveKey="profileUser">
          <Row className={style.rowcon}>
            <Col sm={2} className={style.colum2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className={style.bonton} > <Nav.Link eventKey="modifyUser">Modify Profile</Nav.Link> </Nav.Item>
                <Nav.Item className={style.bonton} > <Nav.Link eventKey="ordenes">Ordenes</Nav.Link> </Nav.Item>
                
              </Nav>
            </Col>
            <Col sm={1} ></Col>
            <Col sm={9} className={style.colum10}>
              <Tab.Content>
              <Tab.Pane eventKey="modifyUser"> </Tab.Pane>
              <Tab.Pane eventKey="ordenes"> <Orders></Orders> </Tab.Pane>
              </Tab.Content>
                
               
            </Col>
          </Row>
        </Tab.Container>
  */
}
export default ProfileUser;