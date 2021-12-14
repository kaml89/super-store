import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Navigation.css";
import CartIcon from "../CartIcon/CartIcon";
import { useAuth } from "../../context/AuthContext";

const Navigation = () => {
  const { authState, logout } = useAuth();

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className="px-2" as={Link} to="/">
            super store
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/deals">
                  Deals
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title={authState.userInfo?.name}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={logout} href="#action/3.4">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/cart">
                <CartIcon />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
