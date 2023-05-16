import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const _ProductForm = ({ data, submitFunction }) => {
    const [name, setName] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");

    if (data && !name && !descripcion && !precio) {

        setName(data.name)
        setDescripcion(data.descripcion)
        setPrecio(data.precio)
        setCantidad(data.cantidad)
    }

    const handleSubmit = (formData)=>{
        console.log("ok")
        submitFunction(formData)
    }
    
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
                    step="0.01"
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
                    content="Editar"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => handleSubmit({name, cantidad, descripcion, precio})}
                    positive
                />
            </Form>
        </>
    )
}

export default _ProductForm
