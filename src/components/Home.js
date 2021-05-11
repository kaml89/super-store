import React, { useState, useEffect } from 'react';
import itemService from '../services/item'

import axios from 'axios';

const Home = (props) => {

    const [ items, setItems ] = useState([]);

    useEffect(async () => {
        
        const response = await itemService.get();
        console.log(response.items)
        setItems(response.items)
        
    }, []);
    
    return (
        <div>Home</div>
    );
}

export default Home;