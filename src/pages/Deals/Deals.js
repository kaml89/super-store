import { useEffect, useState } from "react";
import itemService from "../../services/item.service";
import ProductsList from "../../components/ProductsList/ProductsList";
import useItems from "../../queries/item/useItems";

const Deals = () => {
  const { data, isLoading } = useItems();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.filter((item) => item.isOnSale).length !== 0 ? (
        <ProductsList items={data.filter((item) => item.isOnSale)} />
      ) : (
        "Currenty there are no items on sale :("
      )}
    </div>
  );
};

export default Deals;
