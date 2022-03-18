import PropTypes from "prop-types";
import "./ItemCard.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const ItemCard = ({ imgUrl, name, price, id }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt={`${name}-image`}
      />
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">${price}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <NavLink to={`/item/${id}`}>
          <Button variant="contained">View Item</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

ItemCard.propTypes = {
  avgRating: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ItemCard;
