import { useParams } from "react-router";
import RatingStars from "../Stars/RatingStars";
import Button from "../Button/Button";
import "./Item.css";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../context/NotificationContext";
import useItem from "../../queries/item/useItem";

const Item = () => {
  const { itemId } = useParams();
  const { addItem } = useCart();
  const { addNotification } = useNotification();
  const { data, isLoading } = useItem(itemId);

  const handleAddToCart = () => {
    // e.preventDefault();
    addItem({
      name: data.name,
      id: itemId,
      imgUrl: data.imgUrl,
      price: data.price,
      stockCount: data.stockCount,
      quantity: 1,
    });
    addNotification("Item has been succesfully added");
  };

  return (
    <>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <div className="item-container">
          <div className="product-img">
            <img src={data.imgUrl} alt={data.name} />
          </div>
          <div className="info">
            <h2 className="name">{data.name}</h2>
            <RatingStars avgRating={data.avgRating} />
            <p className="description">{data.description}</p>
            <h3 className="price">${data.price}</h3>
            {/* <form onSubmit={ handleSumbit }> */}
            {/* Quantity: <input type="number" className='quantity' min="1" max={ item.stockCount } onChange={ handleChange }/> */}
            <Button onClick={handleAddToCart} label="Add to cart" />
            {/* </form> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
