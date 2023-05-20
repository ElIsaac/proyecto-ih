import React, { useState, useContext } from 'react'
import { Button, Card, Image, Header, Icon, Container, Modal } from 'semantic-ui-react';

import ModalDelete from '../_ModalDelete'
import ModalEdit from '../_ModalEdit'
import _UserForm from './_UserForm'
import { AppContext } from '../../../context/AppProvider';

const _UserList = ({ users }) => {
    const { updateUsers } = useContext( AppContext );
    const [openDeleteModal, setOpenDeleteModal] = useState(Array(users.length).fill(false))
    const [openEditModal, setOpenEditModal] = useState(Array(users.length).fill(false))

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
            const response = await fetch(`https://proyecto-ihc.fly.dev/usuarios/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Producto con ID ${id} eliminado correctamente`);
                updateUsers();
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
            <Card.Group >
                {users.map((user, index) => (
                    <Card className="tabbackground" key={user.id}>
                        <Card.Content className="tabbackground">
                            <Image
                                floated='right'
                                size='mini'
                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                            />
                            <Card.Header>{user.name}</Card.Header>
                            <Card.Meta>id {user._id}</Card.Meta>
                            <Card.Description>
                                {user.email} <br /> <strong> {user.role} </strong> 
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
                                <ModalDelete setOpen={() => handleClose(index, openDeleteModal, setOpenDeleteModal)} open={openDeleteModal[index]} deleteFunction={handleDelete} data={user} /> 
                                <ModalEdit setOpen={() => handleClose(index, openEditModal, setOpenEditModal)} open={openEditModal[index]} data={user} component={_UserForm} />
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}

export default _UserList
