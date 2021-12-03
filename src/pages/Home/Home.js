import React, { useState, useEffect } from "react";
import itemService from "../../services/item";
import ProductsList from "../../components/ProductsList/ProductsList";
import Search from "../../components/Search/Search";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (params = {}) => {
    setIsLoading(true);
    const response = await itemService.get(params);
    setItems(response);
    console.log(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    fetchData({ q: query });
  };

  return (
    <div className="page-container">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Search handleSearch={handleSearch} />
          <ProductsList items={items} />
        </div>
      )}
    </div>
  );
};

export default Home;
