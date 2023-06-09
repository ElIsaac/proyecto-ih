import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ProductForm from './Products/_ProductForm'

function _ModalEdit({open, setOpen, data, component}) {

    const ChildComponent = component
    const handleClose = () => {
        setOpen(false);
      };
    

    return (
        <Modal
        onClose={handleClose}
        onOpen={() => setOpen(true)}
        open={open}
        >
            <Modal.Header>Editar Producto</Modal.Header>
            <Modal.Content >
                <Modal.Description>
                    {/* <ProductForm data={data} submitFunction={handleEdit} /> */}
                    <ChildComponent data={data} handleClose={handleClose} />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            
                
            </Modal.Actions>
        </Modal>
    )
}

export default _ModalEdit