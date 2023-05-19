import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppProvider'
import { Grid, Header, Icon, Divider, Container, Message, Button } from 'semantic-ui-react';
import AddProductPanel from '../partials/Sales/AddProductPanel';
import TicketPreview from '../partials/Sales/TicketPreview';
import TotalInfo from '../partials/Sales/TotalInfo';
import Info from '../partials/Sales/Info';

const NewSale = () => {

  const { products } = useContext(AppContext);

  const [cart, setCart] = useState([])
  const [showAlert, setShowAlert] = useState(false);

  const handleAction = async () => {
    // Realizar acción
    // Mostrar alerta
    setShowAlert(true);
    // Esperar unos segundos antes de ocultar la alerta
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Ocultar la alerta
    setShowAlert(false);
  };

  return (
    <Container>
      
      <Divider horizontal></Divider>
      {showAlert && (
       <>
        <Message
          positive // Opcional: elige el tipo de alerta (success, warning, error, etc.)
          onDismiss={() => setShowAlert(false)} // Ocultar la alerta al hacer clic en la "x"
        >
          <Message.Header>Transaccion completada!</Message.Header>
          <p>El ticket se genero exitosamente.</p>
        </Message>
        <Divider horizontal></Divider>
       </>
      )}
      <Header as='h1'>
        <Icon name='add to cart' />
        <Header.Content>
          Ventas
          <Header.Subheader>Nueva venta</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider horizontal></Divider>
      )
      <Grid style={{ height: '100vh' }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <AddProductPanel products={products} cart={cart} setCart={setCart} />
          </Grid.Column>
          <Grid.Column width={8}>
            <TicketPreview cart={cart} setCart={setCart} handleAction={handleAction} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid.Row>
              <Grid.Column>
                <Info />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column>
                <TotalInfo cart={cart} />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default NewSale
