import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

const Navigation = () => {
    const { cart } = useCart();
    const getTotalCartItems = ( cart ) => {
        return cart
                    .map(item => item.quantity)
                    .reduce(( prev, curr ) => prev + curr, 0);

    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" >super store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/deals" >Deals</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/cart" >Cart { getTotalCartItems(cart) }</Nav.Link>
                            </Nav.Item>
                        </Nav>                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default Navigation;