import { useCart } from '../context/CartContext';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const { cart, getTotal} = useCart();


    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                { cart.map(item => <li> <CartItem item={ item }/> </li>)}
            </ul>
            <h2>{ getTotal() }</h2>
            {console.log('kamil')}
        </div>
        
    );
}

export default Cart;