import React, { useState, useEffect } from "react";
import itemService from "../../services/item.service";
import ProductsList from "../../components/ProductsList/ProductsList";
import Search from "../../components/Search/Search";
import useItems from "../../queries/item/useItems";
import "./Home.css";

const Home = () => {
  const { data, isLoading } = useItems();

  return (
    <div className="page-container">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Search />
          <ProductsList items={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
