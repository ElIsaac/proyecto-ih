import React from 'react'
import { Tab, Header, Icon, Container, Divider } from 'semantic-ui-react';
import _UserList from '../partials/Users/_UserList'
import _UserForm from '../partials/Users/_UserForm'

import { getUsers } from '../../api/apiCalls'

const Users = () => {
  const users = getUsers()
  console.log(users)
  
  const panes = [
    { menuItem: 'Editar/eliminar', render: () => <Tab.Pane style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 0 }}> < _UserList users={users} /> </Tab.Pane> },
    { menuItem: 'Agregar', render: () => <Tab.Pane className='my-tab-pane'> <_UserForm/> </Tab.Pane> },
  ]
  
  const color = {color:"pink"}

  return (
    <>
      <Container className='cont'>
      <Divider horizontal></Divider>
        <Header as='h1' >
          <Icon name='users' />
          <Header.Content>
            Configuracion de usuarios 
            <Header.Subheader>Agregue, edite o elimine</Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal></Divider>
        <Tab className="tab1" panes={panes} />
        
      </Container>
    </>
  );
};

export default Users

