import React, { useState, useEffect } from 'react';
import itemService from '../../services/item';
import ProductsList from '../ProductsList/ProductsList';
import Search from '../Search/Search'
import './Home.css'

const Home = (props) => {

    const [ items, setItems ] = useState([]);
    // const [ searchQuery, setSearchQuery ] = useState('');

    const fetchData = async (params = {}) => {
        const response = await itemService.get(params);
        setItems(response.items);
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
            <Search handleSearch={ handleSearch }/>
            <ProductsList items = {items}/>
        </div>
 
    );
}

export default Home;