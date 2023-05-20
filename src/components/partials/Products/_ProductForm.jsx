import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

import { AppContext } from '../../../context/AppProvider';

const _ProductForm = ({ data, submitFunction, handleClose }) => {
    const [name, setName] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");

    const { updateProducts } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    if (data && !name && !descripcion && !precio) {
        setName(data.name);
        setDescripcion(data.descripcion);
        setPrecio(data.precio);
        setCantidad(data.cantidad);
    }
    

    const handleSubmit = async (formData, isEditing) => {
        try {
            let url = 'https://proyecto-ihc.fly.dev/productos';
            let method = 'POST';

            if (isEditing) {
                url += `/${data._id}`;
                method = 'PUT';
            }

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Datos enviados correctamente');
                updateProducts();
                if(isEditing){
                    handleClose()
                } else {
                    console.log(location.pathname)
                    navigate("/admin/"); // Redirige al mismo componente
                }
            } else {
                console.error('Error al enviar los datos');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <>
            <Form>
                <Form.Input
                    label="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Input
                    label="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <Form.Input
                    label="Precio"
                    type="number"
                    step="0.5"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
                <Form.Input
                    label="Cantidad"
                    type="number"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                />
                <Button
                    content="Ok"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => handleSubmit({ name, cantidad, descripcion, precio }, !!data)}
                    positive
                />
            </Form>
        </>
    );
};

export default _ProductForm;
