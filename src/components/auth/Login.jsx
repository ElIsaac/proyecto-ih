import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Segment>
          <Checkbox label='Remember me' />
          <a href='#'>Forgot Password?</a>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
