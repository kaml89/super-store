import Item from '../Item/Item';
import PropTypes from 'prop-types';
import './ProductsList.css'

const ProductsList = ({ items }) => {
    return (
        <div className='items-list'>
            { items.map(item => 
                <Item 
                    key={item._id} 
                    imageUrl={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    avgRating={item.avgRating}
                    
                />
            )}
        </div>
    )
};

ProductsList.propTypes = {
    items: PropTypes.array.isRequired
}

export default ProductsList