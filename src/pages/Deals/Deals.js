import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import ProductsList from "../../components/ProductsList/ProductsList";
import useItems from "../../queries/item/useItems";

const Deals = () => {
  const { data, isLoading } = useItems();

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : data.filter((item) => item.isOnSale).length !== 0 ? (
        <ProductsList items={data.filter((item) => item.isOnSale)} />
      ) : (
        "Currenty there are no items on sale :("
      )}
    </>
  );
};

export default Deals;
