import { Route, Routes, Navigate } from 'react-router-dom';

import Products from "../components/admin/Products.jsx"
import Stock from "../components/admin/Stock.jsx"
import Users from "../components/admin/Users.jsx"

import Appointments from "../components/costumer/Appointments.jsx"

import Inventory from "../components/sales/Inventory.jsx"
import NewSale from "../components/sales/NewSale.jsx"

import Home from "../components/Home.jsx"

import Login from '../components/auth/Login.jsx'

import NotFound from '../components/NotFound.jsx'
import Navbar from '../components/Navbar.jsx'
import { AppProvider } from '../context/AppProvider.jsx';
import { AuthProvider } from '../context/AuthProvider.jsx';

export default function AppRouter() {

  return (
    <AppProvider>
      <AuthProvider>
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>

    </AppProvider>

  )
}
