import PropTypes from 'prop-types';
import './ItemCard.css';
import RatingStars from '../Stars/RatingStars';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const ItemCard = ({ avgRating, imageUrl, name, price, id }) => {
    return (
        <div className='item-card'>
            <div className='img-wrapper'>
                <img className="item-card-img"
                    src={ imageUrl }
                    alt={ name }
                />
            </div>
            
            <div className='item-card-details'>
                <div className='item-card-name'><NavLink to={`/item/${id}`}>{ name }</NavLink></div>
                <RatingStars avgRating={ avgRating }/>
                <div className='item-card-price'> ${ price }</div>
                <NavLink to={`/item/${id}`}>
                    <Button label='View Item' />
                </NavLink>
            </div>
            
        </div>
    );
};

ItemCard.propTypes = {
    avgRating: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
}

export default ItemCard;