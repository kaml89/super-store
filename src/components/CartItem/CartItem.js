import { useCart } from '../../context/CartContext';
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
    const { addItem, removeItem } = useCart();

    return (
        <div>
            <img src={ item.imageUrl } alt='img'/>
            <div className='cart-item-info'>
                <h3 className='cart-item-name'>{ item.name }</h3>
                <div className='quantity-controller'>
                    <p>Quantity:</p>
                    {/* <input type="number" 
                           className='quantity' 
                           value={ item.quantity } 
                           min="1" 
                           max={ item.stockCount } 
                        //    onChange={ handleChange }
                    /> */}
                    <button onClick={ () => addItem(item)}>+</button>
                    <button onClick={ () => removeItem(item.id)}>-</button>
                    <button onClick={ () => removeItem(item.id) }>X</button>
                    <p>{ item.quantity }</p>
                </div>
            </div>
            <h2 className='cart-item-price'>{ item.price }</h2>
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
        quantity: PropTypes.string.isRequired
    })
}


export default CartItem;