import { useCart } from "../../context/CartContext";
import CartItem from "../../components/Cart/CartItem/CartItem";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, getTotal } = useCart();
  const renderCart = () => {
    return (
      <div>
        <h2 className="cart-header">Shopping Cart</h2>
        <div className="cart-container">
          {cart.map((item) => (
            <div className="cart-item">
              {" "}
              <CartItem item={item} />{" "}
            </div>
          ))}
          <footer className="cart-summary">
            <Link to="/checkout">
              {/* <button>Checkout</button> */}
              <Button label="Checkout" />
            </Link>
            <h2>${getTotal()}</h2>
          </footer>
        </div>
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
