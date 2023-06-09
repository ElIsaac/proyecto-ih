import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const _ModalDelete = ({ data, setOpen, open, component, deleteFunction }) => {
    const handleClose = () => setOpen(false)
    const ChildComponent = component

    const handleDelete = async (id) => {
        setOpen(false)
        deleteFunction(id)
    }
      

    return (
        <>
            <Modal
                basic
                onClose={handleClose}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
            >
                <Header icon>
                    <Icon name='trash' />
                    Esta seguro que quiere eliminar {data.name} ({data._id})
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={()=>setOpen(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={()=>handleDelete(data._id)}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default _ModalDelete
