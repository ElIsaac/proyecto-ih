import React, {useState} from 'react'
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ height: '100vh' }}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Cerrar' : 'Abrir'}
      </button>
      <ul className="sidebar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/admin/usuarios">usuarios</Link></li>
        <li><Link to="/admin/productos">productos</Link></li>
        <li><Link to="/admin/stock">stock</Link></li>
        <li><Link to="/vendedor/ventas">Ventas</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
