import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormProvider from '../Provider/CRUD Provider/PrividerCreate';
import ListProviders from '../Provider/CRUD Provider/ListProvider.jsx';


function Provider() {
  const [key, setKey] = useState('addProvider');

  return (
    <>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="addProvider" title="Create">
      <FormProvider />
      </Tab>
      <Tab eventKey="provEdit" title="Edit">
      <ListProviders />
      </Tab>
    </Tabs>
    </>
  );
}

export default Provider;