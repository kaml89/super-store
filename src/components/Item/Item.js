import { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import itemService from '../../services/item';
import RatingStars from '../Stars/RatingStars';
import Notification from '../Notification/Notification'
import './Item.css'
import { useCart } from "../../context/CartContext";

const Item = () => {
    
    const { itemId } = useParams();
    const [ item, setItem ] = useState({})
    const [ quantity, setQuantity ] = useState(0);
    const [ message, setMessage ] = useState(null)
    const { state: { cart }, addItem } = useCart();

    const handleChange = (e) => {
        if (e.target.value > item.stockCount) {
            setMessage('Not enough items in stock');
        } else if (e.target.value < 0) {
            setMessage("Quantity number can't be negative")
        } else {
            setMessage(null);
            setQuantity(parseInt(e.target.value));
        }

    };

    const fetchItem = async () => {
        const response = await itemService.getById(itemId);
        setItem(response);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        addItem({
            name: item.name,
            id: itemId,
            imageUrl: item.imageUrl,
            price: item.price,
            stockCount: item.stockCount,
            quantity   
        })

        console.log(cart);
    }

    useEffect(() => {
        fetchItem();
    }, [ itemId ]);


    return (
        <div className='container'>
            <div className='product-img'>
                <img src={ item.imageUrl }/>
            </div>
            <div className='info'>
                <h2 className='name'>{ item.name }</h2>
                <RatingStars avgRating = { item.avgRating }/>
                <p className='description'>{ item.description }</p>
                <h3 className='price'>{ item.price }</h3>
                <form onSubmit={ handleSumbit }>
                    Quantity: <input type="number" className='quantity' min="1" max={ item.stockCount } onChange={ handleChange }/>
                    <button>Add to Cart</button>
                </form>
                <p>{message}</p>
                <p>{ console.log(cart) }</p>
                {/* <Notification message={ message }/> */}
                
            </div>
        </div>
    );
};

export default Item;