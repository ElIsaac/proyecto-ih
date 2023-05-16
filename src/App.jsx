import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Products from "./components/admin/Products.jsx"
import Stock from "./components/admin/Stock.jsx"
import Users from "./components/admin/Users.jsx"

import Appointments from "./components/costumer/Appointments.jsx"

import Inventory from "./components/sales/Inventory.jsx"
import NewSale from "./components/sales/NewSale.jsx"

import Home from "./components/Home.jsx"

import Login from './components/auth/Login.jsx'

import NotFound from './components/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import Background from './Background.jsx';

export default function App() {


  const clienteItems = [{ id: 1, title: 'Citas', path: '/cliente/citas' }];

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <Menu.Item key={item.id} as={Link} to={item.path}>
        {item.title}
      </Menu.Item>
    ));
  };

  return (
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/admin">
          <Route path="productos" element={<Products />} />
          <Route path="stock" element={<Stock />} />
          <Route path="usuarios" element={<Users />} />
        </Route>

        <Route path="/vendedor">
          <Route path="ventas" element={<NewSale />} />
          <Route path="inventario" element={<Inventory />} />
        </Route>

        <Route path="/cliente">
          <Route path="citas" element={<Appointments />} />
        </Route>

        <Route path="/auth">
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  )
};