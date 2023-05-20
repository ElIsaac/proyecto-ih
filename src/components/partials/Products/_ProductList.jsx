import React, { useState, useContext } from 'react'
import { Button, Card, Image, Header, Icon, Container, Modal } from 'semantic-ui-react';

import ModalDelete from '../_ModalDelete'
import ModalEdit from '../_ModalEdit'
import _ProductForm from './_ProductForm'
import { AppContext } from '../../../context/AppProvider';

const _ProductList = ({ products }) => {
    const {updateProducts} = useContext( AppContext );
    const [openDeleteModal, setOpenDeleteModal] = useState(Array(products.length).fill(false))
    const [openEditModal, setOpenEditModal] = useState(Array(products.length).fill(false))

    const handleOpen = (index, modalOpen, setModalOpen) => {
        const openCopy = [...modalOpen]
        openCopy[index] = true
        setModalOpen(openCopy)
    }

    const handleClose = (index, modalOpen, setModalOpen) => {
        const openCopy = [...modalOpen]
        openCopy[index] = false
        setModalOpen(openCopy)
    }
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://proyecto-ihc.fly.dev/productos/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Producto con ID ${id} eliminado correctamente`);
                updateProducts();
                // Realiza cualquier otra acción necesaria después de eliminar el producto
            } else {
                console.error('Error al eliminar el producto');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };


    return (
        <>
            <Card.Group>
                {products.map((product, index) => (
                    <Card key={product.id}>
                        <Card.Content>
                            
                            <Card.Header><Icon name='edit'></Icon> {product.name}</Card.Header>
                            <Card.Meta> id {product._id}</Card.Meta>
                            <Card.Meta>${product.precio}</Card.Meta>
                            <Card.Description>
                                {product.descripcion} <br /> <strong>cantidad:</strong> {product.cantidad}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green' onClick={() => handleOpen(index, openEditModal, setOpenEditModal)}>
                                    Editar
                                </Button>
                                <Button basic color='red' onClick={() => handleOpen(index, openDeleteModal, setOpenDeleteModal)}>
                                    Eliminar
                                </Button>
                                <ModalDelete setOpen={() => handleClose(index, openDeleteModal, setOpenDeleteModal)} open={openDeleteModal[index]} deleteFunction={handleDelete} data={product} />
                                <ModalEdit setOpen={() => handleClose(index, openEditModal, setOpenEditModal)} open={openEditModal[index]} component={_ProductForm} data={product} />
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}

export default _ProductList
