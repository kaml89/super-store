import PropTypes from 'prop-types';
import './ItemCard.css';
import RatingStars from '../Stars/RatingStars';
import { NavLink } from 'react-router-dom';

const ItemCard = ({ avgRating, imageUrl, name, price, id }) => {
    return (
        <div className='item-card'>
            <img className="item-img"
                src={ imageUrl }
                alt={ name }
            />
            <div className='item-name'><NavLink to={`/item/${id}`}>{ name }</NavLink></div>
            <RatingStars avgRating={avgRating}/>
            <div className='price'>{ price }</div>
            <NavLink to={`/item/${id}`} className='view-item-btn'>View Item</NavLink>
            {/* <button className='view-item-btn'>View Item</button> */}
            
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