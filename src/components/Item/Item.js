import { useEffect, useState } from "react";
import { useParams } from "react-router";
import itemService from '../../services/item';
import RatingStars from '../Stars/RatingStars';
import Button from '../Button/Button';
import './Item.css'
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../context/NotificationContext";


const Item = () => {
    
    const { itemId } = useParams();
    const [ item, setItem ] = useState({})
    // const [ quantity, setQuantity ] = useState(0);
    // const [ message, setMessage ] = useState(null)
    const { addItem } = useCart();
    const { addNotification } = useNotification();

    // const handleChange = (e) => {
    //     if (e.target.value > item.stockCount) {
    //         setMessage('Not enough items in stock');
    //     } else if (e.target.value < 0) {
    //         setMessage("Quantity number can't be negative")
    //     } else {
    //         setMessage(null);
    //         setQuantity(parseInt(e.target.value));
    //     }

    // };
    

    const handleSubmit = () => {
        // e.preventDefault();
        addItem({
            name: item.name,
            id: itemId,
            imageUrl: item.imageUrl,
            price: item.price,
            stockCount: item.stockCount,
            quantity: 1
        })
        addNotification('Item has been succesfully added');
    }

    useEffect(() => {
        const fetchItem = async () => {
            const response = await itemService.getById(itemId);
            setItem(response);
        }
        fetchItem();
    }, [ itemId ]);


    return (
        <div className='item-container'>
            <div className='product-img'>
                <img src={ item.imageUrl } alt={ item.name }/>
            </div>
            <div className='info'>
                <h2 className='name'>{ item.name }</h2>
                <RatingStars avgRating = { item.avgRating }/>
                <p className='description'>{ item.description }</p>
                <h3 className='price'>${ item.price }</h3>
                {/* <form onSubmit={ handleSumbit }> */}
                    {/* Quantity: <input type="number" className='quantity' min="1" max={ item.stockCount } onChange={ handleChange }/> */}
                    <Button onClick = { handleSubmit }
                            label = 'Add to cart'/>
                {/* </form> */}
                
            </div>
        </div>
    );
};

export default Item;