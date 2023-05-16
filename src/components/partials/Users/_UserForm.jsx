import React, { useState } from 'react'
import { Form, Button } from "semantic-ui-react";

const _UserForm = ({ data, submitFunction }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  if (data && !name && !email && !role) {

    setName(data.name)
    setEmail(data.email)
    setRole(data.role)
    setPassword(data.password)
  }

  const handleSubmit = (formData) => {
    console.log("ok")
    submitFunction(formData)
  }

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
        <Form.Input
          label="Rol"
          type="text"
          step="0.01"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <Form.Input
          label="Contrasena"
          type="text"
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
  )
}


export default _UserForm
