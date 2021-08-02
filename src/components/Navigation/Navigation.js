import { Link } from 'react-router-dom';
// import { useCart } from '../../context/CartContext';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import './Navigation.css';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

const Navigation = () => {
    // const { cart } = useCart();
    // const getTotalCartItems = ( cart ) => {
    //     return cart
    //                 .map(item => item.quantity)
    //                 .reduce(( prev, curr ) => prev + curr, 0);

    // };

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" >super store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/deals" >Deals</Nav.Link>
                            </Nav.Item>
                        </Nav>                      
                    </Navbar.Collapse>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/cart" >
                            <div className='cart-icon'>
                                <CartIcon /> 
                            </div> 
                        </Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default Navigation;