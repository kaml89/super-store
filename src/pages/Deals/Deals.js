import { useEffect, useState } from "react";
import itemService from "../../services/item.service";
import ProductsList from "../../components/ProductsList/ProductsList";

const Deals = () => {
  const [itemsOnSale, setItemsOnSale] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await itemService.get({ isOnSale: true });
    setItemsOnSale(response.items);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //console.log(itemsOnSale)

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : itemsOnSale.length !== 0 ? (
        <ProductsList items={itemsOnSale} />
      ) : (
        "Currenty there are no items on sale :("
      )}
    </div>
  );
};

export default Deals;
