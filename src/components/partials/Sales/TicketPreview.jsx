import React, {useState, useContext} from 'react'
import { Button, Card, Item, Header, Icon, Modal } from 'semantic-ui-react';

import { AppContext } from '../../../context/AppProvider';

const TicketPreview = ({ cart, setCart, handleAction }) => {

    const [openOkModal, setOpenOkModal] = useState(false)
    const [openCancelModal, setOpenCancelModal] = useState(false)
    const { updateProducts } = useContext( AppContext );
   
    const handleSubmit = async () => {
        
      
        
      
        try {
          const response = await fetch('https://proyecto-ihc.fly.dev/tickets/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({productos: cart})
          });
      
          if (!response.ok) {
            console.log(cart)
            throw new Error('Error en la petición POST');
          }
      
          const responseData = await response.json();
          updateProducts();
          setOpenOkModal(false);
          setCart([]);
          handleAction();
          // Realizar acciones adicionales en caso de éxito
        } catch (error) {
          console.error('Error:', error);
          // Realizar acciones adicionales en caso de error
        }
      };
      

    return (
        <Card fluid centered>
            <Card.Content>
                {cart.map((product) => (
                    <>
                        <Item key={product._id}>
                            <Item.Content key={product._id} header={product.name} meta={`$ ${product.precio} x ${product.cantidadCarrito} = ${product.total}`} />
                        </Item>
                    </>
                ))}

            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={()=>setOpenOkModal(true)}>
                        Cobrar
                    </Button>
                    <Button basic color='red' onClick={()=>setOpenCancelModal(true)}>
                        Cancelar
                    </Button>
                </div>
            </Card.Content>
            <Modal
                basic
                onClose={() => setOpenOkModal(false)}
                onOpen={() => setOpenOkModal(true)}
                open={openOkModal}
                size='small'
            >
                <Header icon>
                    <Icon name='usd' />
                    Confirmar compra
                </Header>

                <Modal.Content>
                    <p>
                        Esta seguro de que los datos de esta venat son correctos?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenOkModal(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => handleSubmit() }>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>


            <Modal
                basic
                onClose={() => setOpenCancelModal(false)}
                onOpen={() => setOpenCancelModal(true)}
                open={openCancelModal}
                size='small'
            >
                <Header icon>
                    <Icon name='trash' />
                    Cancelar venta
                </Header>

                <Modal.Content>
                    <p>
                        se borraran los articulos que tiene registrados,
                        Esta seguro?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenCancelModal(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => setOpenCancelModal(false)}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>

        </Card>
    )
}

export default TicketPreview
