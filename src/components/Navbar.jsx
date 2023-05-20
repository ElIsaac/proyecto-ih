import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { user, updateAuth } = useContext(AuthContext);

  const handleLogout = () => {
    // Realizar cualquier lógica de logout, como borrar el token del localStorage
    localStorage.removeItem('token');

    // Llamar a updateAuth con null para establecer el usuario como no autenticado
    updateAuth(null);
  };

  if (!user) {
    return null;
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ height: '100vh' }}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <Icon name="chevron left" />
        ) : (
          <Icon name="chevron right" />
        )}
      </button>
      {isSidebarOpen && (
        <ul className="sidebar-menu">
          <h1>{user ? user.name : ''}</h1>
          <li>
            <Link to="/home">
              <Icon name="home" />
              Inicio
            </Link>
          </li>
          {user.role === 'admin' && (
            <>
              <li>
                <Link to="/admin/usuarios">
                  <Icon name="users" />
                  Usuarios
                </Link>
              </li>
              <li>
                <Link to="/admin/productos">
                  <Icon name="shopping bag" />
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/admin/stock">
                  <Icon name="warehouse" />
                  Stock
                </Link>
              </li>
            </>
          )}
          <li>
            <Link to="/vendedor/ventas">
              <Icon name="money bill alternate" />
              Ventas
            </Link>
          </li>
          {user && (
            <button className="logout-button" onClick={handleLogout}>
              <Icon name="sign-out" />
              Cerrar sesión
            </button>
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
