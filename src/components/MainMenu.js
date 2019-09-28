import React from "react"
import { NavLink } from "react-router-dom"
import { mainPath, cartPath, contactsPath } from "../helpers/routes"
import { Nav, Navbar } from "react-bootstrap"
import CartButton from "./CartButton"

const MainMenu = () => {
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>React Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Item className="nav-link"><NavLink to={mainPath()}>Catalog</NavLink></Nav.Item>
          <Nav.Item className="nav-link"><NavLink to={contactsPath()}>Contacts</NavLink></Nav.Item>
          <Nav.Item className="nav-link"><NavLink to={cartPath()}>Cart</NavLink></Nav.Item>
        </Nav>
        <CartButton />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainMenu
