import './CartPreview.css';
import { useCart } from '../../context/CartContext';

const CartPreview = ({ showPreview }) => {
    // const [ isMouseOver, setIsMouseOver ] = useState(false);
    const { cart, getTotal } = useCart();

    return cart.length === 0 ? null : 
    (
        <div className='cart-preview-container'
             style={{ display: `${showPreview ? 'block' : 'none'} `}}
            //  onMouseOver={ () => setIsMouseOver(true) }
            //  onMouseOut={ () => setIsMouseOver(false) }
        >
             
            <h3>Cart</h3>
            { cart.map(item => 
                <div className='preview-item'>
                    <div className='preview-item-name'>{ item.name }</div> 
                    <div className='preview-item-price'>${ item.price * item.quantity }</div>
                </div>) 
            }
            <div className='preview-total-price'>${ getTotal() }</div>
            <button>Go to Cart</button>
        </div>
    );
}

export default CartPreview;