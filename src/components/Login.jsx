import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Login;
