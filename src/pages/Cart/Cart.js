import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, getTotal} = useCart();


    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className='cart-container'>
                { cart.map(item => <div className='cart-item'> <CartItem item={ item }/> </div>)}
                <h2>${ getTotal() }</h2>
                <Link to='/checkout'>
                    <button>Checkout</button>
                </Link>
            </div>
            
        </div>
        
    );
}

export default Cart;