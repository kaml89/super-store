import React, { useState, useEffect } from 'react';
import itemService from '../../services/item';
import ProductsList from '../ProductsList/ProductsList';
import Search from '../Search/Search'
import './Home.css'

const Home = (props) => {

    const [ items, setItems ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const fetchData = async (params = {}) => {
        setIsLoading(true);
        const response = await itemService.get(params);
        setItems(response.items);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData()
        
    }, []);


    const handleSearch = (query) => {
        // const response = await itemService.get({ 'q': query })
        // setItems(response.items);
        console.log('kamil')
        fetchData({ 'q': query })
    };
    
    return (
        <div>
            { isLoading ? <p>Loading</p> : 
                <div>
                    <Search handleSearch={ handleSearch }/>
                    <ProductsList items = { items }/>
                </div>
            }
        </div>
        
 
    );
}

export default Home;