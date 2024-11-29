import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './navbar.css';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-link">Profile</Nav.Link>
            <Nav.Link as={Link} to="/universitylist" className="nav-link">WorldWide Fair</Nav.Link>
            <Nav.Link as={Link} to="/universidadpanamericana" className="nav-link">Universidad Panamericana</Nav.Link>

            <NavDropdown 
              title="Careers" 
              id="basic-nav-dropdown" 
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/careers/administrative" className="dropdown-item">Administrative</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers/engineering" className="dropdown-item">Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers/humanities" className="dropdown-item">Humanities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers/medicine" className="dropdown-item">Medicine</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers/other" className="dropdown-item">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
