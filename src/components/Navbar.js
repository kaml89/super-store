import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const getTotalCartItems = ( cart ) => {
        return cart
                    .map(item => item.quantity)
                    .reduce(( prev, curr ) => prev + curr, 0);

    };

    return (
        <nav className='navbar'>
            <div className='logo'>Super Store</div>
                <div className='nav'>
                
                    <div className='nav-item'><NavLink to={'/'} exact activeClassName='selected'>Home</NavLink></div>
                    <div className='nav-item'><NavLink to={'/deals'} activeClassName='selected'>Deals</NavLink></div>
                    <div className='nav-item'><NavLink to={'/cart'} activeClassName='selected'>Cart { getTotalCartItems(cart) }</NavLink></div>
                    <button className='nav-item signin-btn'>Sign In</button>
                </div>
                
        </nav>
    );
}

export default Navbar;