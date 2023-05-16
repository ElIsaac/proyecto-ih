import React, { useState } from 'react';
import { Tab, Header, Icon, Container, Divider } from 'semantic-ui-react';

import ProductList from '../partials/Products/_ProductList'
import ProductForm from '../partials/Products/_ProductForm'
import { getProducts } from '../../api/apiCalls';

const Products = () => {
  const products = getProducts()

  const handleSubmit=(data)=>{
    console.log("sub")
    console.log(data)
  }

  const panes = [
    { menuItem: 'Editar/eliminar', render: () => <Tab.Pane style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 0 }}><ProductList products={products} /></Tab.Pane> },
    { menuItem: 'Agregar', render: () => <Tab.Pane className='my-tab-pane'><ProductForm submitFunction={handleSubmit} /></Tab.Pane> },
  ]

  return (
    <>
      <Container className='cont'>
      <Divider horizontal></Divider>
        <Header as='h1'>
          <Icon name='settings' />
          <Header.Content>
            Configuracion de productos
            <Header.Subheader>Agregue, edite o elimine</Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal></Divider>
        <Tab className="tab1" panes={panes} />
        
      </Container>
    </>
  );
};

export default Products;
