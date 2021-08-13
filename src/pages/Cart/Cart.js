import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, getTotal} = useCart();


    return (
        <div>
            <h2 className='cart-header'>Shopping Cart</h2>
            <div className='cart-container'>
                { cart.map(item => <div className='cart-item'> <CartItem item={ item }/> </div>)}
                <footer className='cart-summary'>
                    <Link to='/checkout'>
                        {/* <button>Checkout</button> */}
                        <Button label='Checkout'/>
                    </Link>
                    <h2>${ getTotal() }</h2>
                </footer>
                
            </div>
        </div>
        
    );
}

export default Cart;