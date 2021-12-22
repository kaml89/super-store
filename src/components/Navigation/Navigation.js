import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import "./Navigation.css";
import CartIcon from "../CartIcon/CartIcon";
import Dropdown from "../Dropdown/Dropdown";
import { useAuth } from "../../context/AuthContext";

const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
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

              {isAuthenticated() ? (
                <Dropdown />
              ) : (
                <Nav.Item>
                  <Nav.Link as={Link} to="/login">
                    Sign In
                  </Nav.Link>
                </Nav.Item>
              )}
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
    </>
  );
};

export default Navigation;
