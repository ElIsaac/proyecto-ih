import React from 'react';
import { Card, List, Icon } from 'semantic-ui-react';

const ShowTickets = ({ tickets }) => {
  return (
    <Card.Group>
      {tickets.map(item => (
        <Card key={item._id}>

          <Card.Content>
            <Card.Header>Ticket no.: {item._id}</Card.Header>
            <List.Description>{new Date(item.createdAt).toLocaleString()}</List.Description>
            <Card.Description>
              <List>
                {item.productos.map(producto => (
                  <List.Item key={producto._id}>
                    <List.Content>
                      <List.Header>{producto.name}</List.Header>
                      
                      <p>Precio: {producto.precio} x {producto.cantidadCarrito} </p>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
      <a>
        <Icon name='usd' />
        {item.valorTotal}
      </a>
    </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default ShowTickets;
