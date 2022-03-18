import React from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import ProductsList from "../../components/ProductsList/ProductsList";
// import Search from "../../components/Search/Search";
import useItems from "../../queries/item/useItems";
// import Container from "@mui/material/Container";
import "./Home.css";

const Home = () => {
  const { data, isLoading } = useItems();

  return (
    // <div className="page-container">
    // <Container maxWidth="xl">
    <>{isLoading ? <LoadingScreen /> : <ProductsList items={data} />}</>
    ///* </Container> */
    // </div>
  );
};

export default Home;
