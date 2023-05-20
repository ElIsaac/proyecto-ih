import React, { useState, useContext } from 'react'
import { Form, Button, Select } from "semantic-ui-react";

import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from '../../../context/AppProvider';

const _UserForm = ({ data, submitFunction }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const { updateUsers } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (data && !name && !email && !role) {

    setName(data.name)
    setEmail(data.email)
    setRole(data.role)
    setPassword(data.password)
  }

  const roleOptions = [
    { key: "admin", value: "admin", text: "Admin" },
    { key: "saler", value: "saler", text: "Saler" },
  ];
  

  const handleSubmit = async (formData, isEditing) => {
    try {
      let url = 'http://localhost:3000/usuarios';
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
        updateUsers();
        if (isEditing) {
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
      <Form className="tabbackground">
        <Form.Input
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Field>
          <label>Rol</label>
          <Select
            placeholder="Seleccionar rol"
            options={roleOptions}
            value={role}
            onChange={(e, { value }) => setRole(value)}
          />
        </Form.Field>
        <Form.Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          content="Editar"
          labelPosition='right'
          icon='checkmark'
          onClick={() => handleSubmit({ name, email, role, password })}
          positive
        />
      </Form>
    </>
  );
  
}


export default _UserForm
