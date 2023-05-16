import React from 'react'
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
  const menuItem=[
    {
      path: "/",
      name: "",
      icon: <Icon name='search' />
    },{
      path: "/admin/productos",
      name: "productos",
      icon: <Icon name='search' />
    },{
      path: "/admin/usuarios",
      name: "usuarios",
      icon: <Icon name='search' />
    },{
      path: "/admin/stock",
      name: "stock",
      icon: <Icon name='search' />
    },{
      path: "/vendedor/ventas",
      name: "ventas",
      icon: <Icon name='search' />
    },{
      path: "/vendedor/inventario",
      name: "inv",
      icon: <Icon name='search' />
    },{
      path: "/cliente/citas",
      name: "ci",
      icon: <Icon name='search' />
    },{
      path: "*",
      name: "error",
      icon: <Icon name='search' />
    },
  ]
  return (
    <div className="container">
      <div className="sidebar">
        .top
      </div>
    </div>
  )
}

export default Navbar
