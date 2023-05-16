import React, { useState } from 'react'
import { Button, Card, Image, Header, Icon, Container, Modal } from 'semantic-ui-react';

import ModalDelete from '../_ModalDelete'
import ModalEdit from '../_ModalEdit'
import _UserForm from './_UserForm'

const _UserList = ({ users }) => {
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

    const handleDelete = (name) => {
        console.log("delete ", name)
    }

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
                            <Card.Header>id {user.id}</Card.Header>
                            <Card.Meta>{user.name} </Card.Meta>
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
