import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, getTotal} = useCart();


    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                { cart.map(item => <li> <CartItem item={ item }/> </li>)}
            </ul>
            <h2>${ getTotal() }</h2>
            <Link to='/checkout'>
                <button>Checkout</button>
            </Link>
            
        </div>
        
    );
}

export default Cart;