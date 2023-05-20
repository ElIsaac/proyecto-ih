import React from 'react';
import { Container, Grid, Card, Divider, Icon } from 'semantic-ui-react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container>
        <Grid centered>
          <Grid.Column mobile={16} tablet={12} computer={14}>
            <Divider></Divider>
            <Card.Group itemsPerRow={2} stackable>
              <Card>
                <Card.Content>
                  <Icon name="home" size="huge" color="teal" />
                  <Card.Header as="h2">Inicio</Card.Header>
                  <Card.Description>
                    Esta es la página de inicio del panel administrador. Aquí podrás encontrar información general del
                    negocio y acceder a diferentes secciones a través del menú de navegación.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Icon name="users" size="huge" color="purple" />
                  <Card.Header as="h2">Usuarios</Card.Header>
                  <Card.Description>
                    En la sección de Usuarios podrás gestionar los usuarios del sistema. Podrás agregar nuevos usuarios,
                    modificar sus roles y privilegios, y realizar otras acciones relacionadas con la administración de
                    usuarios.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Icon name="shopping bag" size="huge" color="blue" />
                  <Card.Header as="h2">Productos</Card.Header>
                  <Card.Description>
                    En la sección de Productos podrás administrar el catálogo de productos del negocio de uñas. Podrás
                    agregar nuevos productos, actualizar su información, gestionar el stock y realizar otras tareas
                    relacionadas con la gestión de productos.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Icon name="warehouse" size="huge" color="green" />
                  <Card.Header as="h2">Stock</Card.Header>
                  <Card.Description>
                    La sección de Stock te permitirá controlar y gestionar el inventario de productos disponibles en el
                    negocio. Podrás realizar seguimiento del stock, realizar ajustes y actualizar la disponibilidad de
                    productos.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Icon name="money bill alternate" size="huge" color="orange" />
                  <Card.Header as="h2">Ventas</Card.Header>
                  <Card.Description>
                    En la sección de Ventas podrás registrar y administrar las transacciones de venta del negocio de
                    uñas. Podrás generar nuevas ventas, registrar detalles de la venta y mantener un historial de las
                    transacciones realizadas.
                  </Card.Description>
                </Card.Content>
              </Card>
              
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
