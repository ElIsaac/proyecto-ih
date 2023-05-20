import React, {useState, useContext} from 'react'
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { user, updateAuth } = useContext( AuthContext );
  const handleLogout = () => {
    // Realizar cualquier lógica de logout, como borrar el token del localStorage
    localStorage.removeItem('token');

    // Llamar a updateAuth con null para establecer el usuario como no autenticado
    updateAuth(null)
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ height: '100vh' }}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Cerrar' : 'Abrir'}
      </button>
      <ul className="sidebar-menu">
        <h1>{user ? user.name : ""}</h1>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/admin/usuarios">usuarios</Link></li>
        <li><Link to="/admin/productos">productos</Link></li>
        <li><Link to="/admin/stock">stock</Link></li>
        <li><Link to="/vendedor/ventas">Ventas</Link></li>
        {user ? <button
        onClick={()=>handleLogout()}
        >"Cerrar sesion"</button>  : ""}
      </ul>
    </div>
  )
}

export default Navbar
