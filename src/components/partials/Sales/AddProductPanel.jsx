import React from 'react';
import { Button, Icon, Item, Label, Card, ItemGroup, List, Container, Divider } from 'semantic-ui-react';

const AddProductPanel = ({ products, cart, setCart }) => {
    const handleAdd = (newProduct) => {
        const existingProduct = cart.find(item => item._id === newProduct._id);
    
        if (existingProduct) {
          const updatedCart = cart.map(item => {
            if (item._id === existingProduct._id) {
              return { ...item, cantidadCarrito: item.cantidadCarrito + 1, total: (item.cantidadCarrito + 1) * item.precio };
            }
            return item;
          });
          setCart(updatedCart);
        } else {
          const updatedCart = [...cart, { ...newProduct, cantidadCarrito: 1, total: newProduct.precio }];
          setCart(updatedCart);
        }
      };
    
      const handleRemove = (id) => {
        const existingProduct = cart.find(item => item._id === id);
    
        if (existingProduct) {
          if (existingProduct.cantidadCarrito > 1) {
            const updatedCart = cart.map(item => {
              if (item._id === existingProduct._id) {
                return { ...item, cantidadCarrito: item.cantidadCarrito - 1, total: (item.cantidadCarrito - 1) * item.precio };
              }
              return item;
            });
            setCart(updatedCart);
          } else {
            const updatedCart = cart.filter(item => item._id !== id);
            setCart(updatedCart);
          }
        }
      };
    return (
        <div>
            <Card >
                <Card.Content>
                    <Card.Header>Productos:</Card.Header>
                </Card.Content>
                <Card.Content>
                    {products.map((product) => (
                        <>
                            <Item key={product._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                <Item.Content>
                                    <Item.Header as='a'>{product.name}</Item.Header>
                                </Item.Content>

                                <Item.Extra>
                                    <Button 
                                    primary 
                                    animated='vertical'
                                    onClick={()=>handleAdd(product)}
                                    >
                                        <Button.Content hidden>Agregar</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='shop' />
                                        </Button.Content>
                                    </Button>
                                    <Button 
                                    color='red' 
                                    animated='vertical'
                                    onClick={()=>handleRemove(product._id)}

                                    >
                                        <Button.Content hidden>Eliminar</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='trash' />
                                        </Button.Content>
                                    </Button>
                                </Item.Extra>

                            </Item>
                            <br />
                        </>


                    ))}
                </Card.Content>
            </Card>

        </div>
    );
};

export default AddProductPanel;
