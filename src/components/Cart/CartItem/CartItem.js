import { useCart } from "../../../context/CartContext";
import PropTypes from "prop-types";
import "./CartItem.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useCart();
  // const updateItem = useUpdateItem();

  const handleAddItem = () => {
    addItem(item);
  };

  return (
    // <div className="cart-item-container">
    <ListItem>
      <Box
        sx={{
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Avatar
          src={item.imgUrl}
          variant="square"
          sx={{ width: 120, height: 120, objectFit: "scale-down" }}
        />
        {/* <img src={item.imgUrl} alt="img" /> */}
      </Box>

      <div className="cart-item-info">
        <Typography variant="h5" sx={{ fontWeight: "700", py: "0.5rem" }}>
          {item.name}
        </Typography>
        {/* <h3 className="cart-item-name">{item.name}</h3> */}
        <Box sx={{ display: "flex" }}>
          {/* <div className="quantity-controller"> */}
          <Button
            color="success"
            variant="contained"
            size="large"
            onClick={handleAddItem}
          >
            +
          </Button>

          {/* <IconButton color="success" onClick={handleAddItem}>
            <AddBoxIcon fontSize="large" />
          </IconButton> */}
          {/* <p>{item.quantity}</p> */}
          <Typography variant="h6" sx={{ padding: "1rem" }}>
            {item.quantity}
          </Typography>

          {/* <IconButton color="error" onClick={() => removeItem(item.id)}>
            <IndeterminateCheckBoxIcon fontSize="large" />
          </IconButton> */}
          <Button
            color="error"
            variant="contained"
            size="small"
            onClick={() => removeItem(item.id)}
          >
            {" - "}
          </Button>
          {/* </div> */}
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexGrow: 3,
          textAlign: "end",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "500", py: "0.5rem" }}>
          ${(item.price * item.quantity).toFixed(2)}
        </Typography>
      </Box>

      {/* <h2 className="cart-item-price">
        ${(item.price * item.quantity).toFixed(2)}
      </h2> */}
      {/* </div> */}
    </ListItem>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};

export default CartItem;
