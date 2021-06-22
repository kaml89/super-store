import { useCart } from '../context/CartContext';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const { state: { cart }, removeItem } = useCart();


    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                { cart.map(item => <li> <CartItem item={ item }/> </li>)}
            </ul>
        </div>
        
    );
}

export default Cart;