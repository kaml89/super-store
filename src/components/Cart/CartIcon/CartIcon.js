import "./CartIcon.css";
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const CartIcon = () => {
  const { getTotalQuantity } = useCart();
  return (
    <IconButton
      size="large"
      aria-label="show-cart"
      color="inherit"
      component={Link}
      to="/cart"
    >
      <Badge badgeContent={getTotalQuantity()} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
