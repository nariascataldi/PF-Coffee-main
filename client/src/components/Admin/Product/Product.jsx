import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListProducts from './CRUD Product/ListProduct';
import ProductAdmin from './ProductAdmin';

function Product() {
  const [key, setKey] = useState('prodCreate');
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="prodCreate" title="Create"> <ProductAdmin /> </Tab>
        <Tab eventKey="prodEdit" title="Edit"> <ListProducts /> </Tab>
      </Tabs>
    </>
  );
}

export default Product;