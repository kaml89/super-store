import { useCart } from "../../context/CartContext";
import CartItem from "../../components/Cart/CartItem/CartItem";
import Header from "../../components/Header/Header";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, getTotal } = useCart();
  const renderCart = () => {
    return (
      <div>
        {/* <h2 className="cart-header">Shopping Cart</h2> */}
        <List sx={{ px: "2rem" }}>
          {/* <div className="cart-container"> */}
          {cart.map((item) => (
            <Box key={item.id}>
              {" "}
              <CartItem item={item} />{" "}
              <Divider variant="middle" component="li" />
            </Box>
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: "4rem",
            py: "2rem",
          }}
        >
          <Link to="/checkout">
            {/* <button>Checkout</button> */}
            <Button variant="contained" size="large">
              Checkout
            </Button>
          </Link>
          <h2>${getTotal()}</h2>
        </Box>
        {/* <footer className="cart-summary">
          <Link to="/checkout">
            <Button label="Checkout" />
          </Link>
          <h2>${getTotal()}</h2>
        </footer> */}
        {/* </div> */}
      </div>
    );
  };

  return (
    <div>
      <Header label="Shopping Cart" />
      {cart.length === 0 ? (
        <h2 className="empty-cart-info"> Your cart is empty </h2>
      ) : (
        renderCart()
      )}
    </div>
  );
};

export default Cart;
