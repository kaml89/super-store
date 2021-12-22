import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NavDropdown, Nav } from "react-bootstrap";

const Dropdown = () => {
  const { authState, logout, isAdmin } = useAuth();
  return (
    <>
      <NavDropdown
        title={authState.userInfo?.name}
        id="collasible-nav-dropdown"
      >
        {isAdmin() ? (
          <NavDropdown.Item href="#action/3.4">
            <Nav.Link as={Link} to="/admin">
              Admin Dashboard
            </Nav.Link>
          </NavDropdown.Item>
        ) : null}

        <NavDropdown.Item onClick={logout} href="#action/3.4">
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Dropdown;
