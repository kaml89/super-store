import { useEffect, useState } from "react";
import { useParams } from "react-router";
import itemService from '../../services/item';
import RatingStars from '../Stars/RatingStars';
import './Item.css'
import { useCart } from "../../context/CartContext";

const Item = () => {
    
    const { itemId } = useParams();
    const [ item, setItem ] = useState({})
    const [ quantity, setQuantity ] = useState(0);
    const [ message, setMessage ] = useState(null)
    const { cart, addItem } = useCart();

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
        const fetchItem = async () => {
            const response = await itemService.getById(itemId);
            setItem(response);
        }
        fetchItem();
    }, [ itemId ]);


    return (
        <div className='container'>
            <div className='product-img'>
                <img src={ item.imageUrl } alt={ item.name }/>
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
                <p>{ console.log('Item') }</p>
                {/* <Notification message={ message }/> */}
                
            </div>
        </div>
    );
};

export default Item;