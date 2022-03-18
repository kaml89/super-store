import { useParams } from "react-router";
import RatingStars from "../Stars/RatingStars";
import Button from "@mui/material/Button";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import "./Item.css";
import { useCart } from "../../context/CartContext";
import useItem from "../../queries/item/useItem";
import useUpdateItem from "../../queries/item/useUpdateItem";
import { useSnackbar } from "notistack";

const Item = () => {
  const { itemId } = useParams();
  const { addItem } = useCart();
  const { data, isLoading } = useItem(itemId);
  const updateItem = useUpdateItem();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = () => {
    addItem(data);
    updateItem.mutate({ ...data, stockCount: data.stockCount - 1 });
    enqueueSnackbar("Item added to cart", { variant: "success" });
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
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
            {/* <Button onClick={handleAddToCart} label="Add to cart" /> */}
            <Button variant="contained" onClick={handleAddToCart}>
              Add to cart
            </Button>
            {/* </form> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
