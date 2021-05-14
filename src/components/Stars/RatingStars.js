import PropTypes from 'prop-types';
import FullStar from './FullStar';
import HalfStar from './HalfStar';
import EmptyStar from './EmptyStar';

const RatingStars = ({ avgRating }) => {

    const fullStars = Math.floor(avgRating);
    const halfStars = (avgRating % 1) === 0 ? 0 : 1;
    
    return (
        <div>
            {
                Array(5)
                    .fill(<FullStar />, 0)
                    .fill(<HalfStar />, fullStars, fullStars + halfStars)
                    .fill(<EmptyStar />, fullStars + halfStars)
            }
        </div>
    );
};

RatingStars.propTypes = {
    avgRating: PropTypes.number.isRequired
}

export default RatingStars;

