import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeItem } = useCart();
    console.log(item.name, item.stockCount, item.quantity, item.id, item.price)

    return (
        <div>
            <img src={ item.imageUrl } alt='img'/>
            <div className='cart-item-info'>
                <h3 className='cart-item-name'>{ item.name }</h3>
                <div className='quantity-controller'>
                    <p>Quantity:</p>
                    <input type="number" 
                           className='quantity' 
                           value={ item.quantity } 
                           min="1" 
                           max={ item.stockCount } 
                        //    onChange={ handleChange }
                    />
                    <button onClick={ () => removeItem(item.id) }>Remove</button>
                </div>
            </div>
            <h2 className='cart-item-price'>{ item.price }</h2>
        </div>
    );
};

// CartItem.propTypes = {
//     imageUrl: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     stockCount: PropTypes.number.isRequired,
//     id: PropTypes.string.isRequired,
//     quantity: PropTypes.string.isRequired
// }

export default CartItem;