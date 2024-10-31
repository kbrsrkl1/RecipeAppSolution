import React from 'react';
import {Link} from 'react-router-dom';
import {Brand, Nav, Menu, MenuLink} from "./Navbar.style"


const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to = "">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
    </Brand>



      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="Logout">Logout</MenuLink>
      </Menu>

    </Nav>
  )
}

export default Navbar;
