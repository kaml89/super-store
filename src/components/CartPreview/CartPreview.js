import './CartPreview.css';
import { useState } from 'react';

const CartPreview = ({ showPreview, cart }) => {
    const [ isMouseOver, setIsMouseOver ] = useState(false);
    
    return (
        <div className='cart-preview-container'
             style={{ display: `${showPreview || isMouseOver ? 'block' : 'none'} `}}
             onMouseOver={ () => setIsMouseOver(true) }
             onMouseOut={ () => setIsMouseOver(false) }
        >
             
            <h3>Cart</h3>
            { cart.map(item => <div>{ item.name }</div>) }
            <button>Go to Cart</button>
        </div>
    );
}

export default CartPreview;