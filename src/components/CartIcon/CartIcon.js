import { useState } from "react";
import { ReactComponent as CartSVG } from "../../assets/shopping-cart.svg";
import "./CartIcon.css";
import { useCart } from "../../context/CartContext";
import CartPreview from "../CartPreview/CartPreview";

const CartIcon = () => {
  const [showPreview, setShowPreview] = useState(false);
  const { cart } = useCart();
  const getTotalCartItems = (cart) => {
    return cart
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <div
      onMouseOver={() => setShowPreview(true)}
      onMouseOut={() => setShowPreview(false)}
    >
      <CartSVG />
      <span className={cart.length > 0 ? "cart-badge" : "hidden"}>
        {getTotalCartItems(cart)}
      </span>
      <CartPreview showPreview={showPreview} cart={cart} />
    </div>
  );
};

export default CartIcon;
