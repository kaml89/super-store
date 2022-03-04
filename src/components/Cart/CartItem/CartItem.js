import { useCart } from "../../../context/CartContext";
import PropTypes from "prop-types";
import "./CartItem.css";
import { Button } from "react-bootstrap";

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useCart();
  // const updateItem = useUpdateItem();

  const handleAddItem = () => {
    addItem(item);
    // console.log(item.stockCount);
    // updateItem.mutate({ ...item, stockCount: item.stockCount - 1 });
  };

  return (
    <div className="cart-item-container">
      <div className="cart-img">
        <img src={item.imgUrl} alt="img" />
      </div>

      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <div className="quantity-controller">
          <Button variant="success" onClick={handleAddItem}>
            +
          </Button>
          <p>{item.quantity}</p>
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            {" - "}
          </Button>
        </div>
      </div>
      <h2 className="cart-item-price">
        ${(item.price * item.quantity).toFixed(2)}
      </h2>
    </div>
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
