import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>Super Store</div>
                <div className='nav'>
                
                    <div className='nav-item'><NavLink to={'/'} exact activeClassName='selected'>Home</NavLink></div>
                    <div className='nav-item'><NavLink to={'/deals'} activeClassName='selected'>Deals</NavLink></div>
                    <div className='nav-item'><NavLink to={'/cart'} activeClassName='selected'>Cart</NavLink></div>
                    <button className='nav-item signin-btn'>Sign In</button>
                </div>
                
        </nav>
    );
}

export default Navbar;