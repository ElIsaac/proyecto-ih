import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Products from "../components/admin/Products.jsx"
import Stock from "../components/admin/Stock.jsx"
import Users from "../components/admin/Users.jsx"


import Inventory from "../components/sales/Inventory.jsx"
import NewSale from "../components/sales/NewSale.jsx"

import Home from "../components/Home.jsx"

import Login from '../components/auth/Login.jsx'

import NotFound from '../components/NotFound.jsx'
import Navbar from '../components/Navbar.jsx'
import { AppProvider } from '../context/AppProvider.jsx';
import { AuthContext } from '../context/AuthProvider.jsx';
import { ProtectedRoute } from './ProtectedRoutes.jsx';


export default function AppRouter() {
  const { user } = useContext(AuthContext);
  let adminAllow = false;
  if (user && user.role === 'admin') {
    adminAllow = true;
  }

  return (
    <AppProvider>
      <Routes>

     
          <Route path="/" element={ <ProtectedRoute isAllowed={!user} redirectTo='/' ><Login /></ProtectedRoute>} />
        

        <Route path="/home" element={<Home />} />

        <Route path="/admin" element={<ProtectedRoute isAllowed={adminAllow} />}>
          <Route path="productos" element={<Products />} />
          <Route path="stock" element={<Stock />} />
          <Route path="usuarios" element={<Users />} />
        </Route>

        <Route path="/vendedor" element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="ventas" element={<NewSale />} />
          <Route path="inventario" element={<Inventory />} />
        </Route>

        <Route path="*" element={<NotFound />} />

        <Route path="/auth/login" element={<Navigate to="/" />} />
      </Routes>

    </AppProvider>

  )
}