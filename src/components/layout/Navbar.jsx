import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { IoGameControllerOutline } from 'react-icons/io5';
import SearchBar from '../SearchBar';

function MainNav() {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-2">
      <Container>
        <Navbar.Brand href="#home">
            <Nav.Link to="/" as={NavLink}>
                Game Store <IoGameControllerOutline />
            </Nav.Link>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* <SearchBar /> */}
          </Nav>
          <Nav>
            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            <Nav.Link href="https://github.com/immonroe">Github</Nav.Link>
            <Nav.Link to="/cart" as={NavLink}>
            Cart <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;