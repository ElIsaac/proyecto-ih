import React, { useState, createContext } from 'react'
import { Grid } from 'semantic-ui-react';
import AppRouter from './routes/routes.jsx'
import Background from './Background.jsx';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';

export default function App() {


  return (
    <>
      <BrowserRouter>

        <Background className="background zin" />

        <AuthProvider>
        <Grid>
          <Grid.Row>

            <Grid.Column width={2}>
                <Navbar className="full-height" />
            </Grid.Column>

            <Grid.Column width={14}>
              <AppRouter />
            </Grid.Column>

          </Grid.Row>
        </Grid>
        </AuthProvider>

      </BrowserRouter>
    </>
  )
};
