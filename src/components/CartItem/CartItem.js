import { useCart } from '../../context/CartContext';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = ({ item }) => {
    const { addItem, removeItem } = useCart();

    return (
        <div className='cart-item-container'>
            <div className='cart-img'>
                <img src={ item.imageUrl } alt='img'/>
            </div>
            
            <div className='cart-item-info'>
                <h3 className='cart-item-name'>{ item.name }</h3>
                <div className='quantity-controller'>
                    <button onClick={ () => addItem(item)}>+</button>
                    <button onClick={ () => removeItem(item.id)}>-</button>
                    <button onClick={ () => removeItem(item.id) }>X</button>
                    <p>{ item.quantity }</p>
                </div>
            </div>
            <h2 className='cart-item-price'>${ (item.price * item.quantity).toFixed(2) }</h2>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stockCount: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })
}


export default CartItem;