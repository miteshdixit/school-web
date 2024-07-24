import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Brand href="/" className='d-flex'>
        <img src="/logo.png" alt="School Logo" width="50" height="50" />
        <span className="school-name">S.P School</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About Us</NavLink>
          <NavLink className="nav-link" to="/academics">Academics</NavLink>
          <NavLink className="nav-link" to="/admissions">Admissions</NavLink>
          <NavLink className="nav-link" to="/faculty">Faculty</NavLink>
          <NavLink className="nav-link" to="/students">Students</NavLink>
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
