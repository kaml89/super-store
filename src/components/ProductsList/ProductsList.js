import ItemCard from "../ItemCard/ItemCard";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "./ProductsList.css";

const ProductsList = ({ items }) => {
  // return (
  //   <div className="items-list">
  //     {items.map((item) => (
  //       <ItemCard
  //         key={item.id}
  //         id={item.id}
  //         imgUrl={item.imgUrl}
  //         name={item.name}
  //         price={item.price}
  //         avgRating={item.avgRating}
  //       />
  //     ))}
  //   </div>
  // );

  return (
    <Grid container spacing={6} justifyContent="center" sx={{ py: 5 }}>
      {items.map((item) => {
        return (
          <Grid item key={item.id}>
            <ItemCard
              id={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
              avgRating={item.avgRating}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

ProductsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductsList;
