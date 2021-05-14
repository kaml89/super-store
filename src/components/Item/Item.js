import PropTypes from 'prop-types';
import './Item.css';
import RatingStars from '../Stars/RatingStars';

const Item = (props) => {
    return (
        <div className='item-card'>
            <img className="item-img"
                src={ props.imageUrl }
            />
            <div className='item-name'>{ props.name }</div>
            <RatingStars avgRating={props.avgRating}/>
            <div className='price'>{ props.price }</div>
            <button className='view-item-btn'>View Item</button>
            
        </div>
    );
};

Item.propTypes = {
    avgRating: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    // isOnSale: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // stockCount: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
}

export default Item;