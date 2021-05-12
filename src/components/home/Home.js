import React, { useState, useEffect } from 'react';
import itemService from '../../services/item';
import Item from '../item/Item';
import './Home.css'

import axios from 'axios';

const Home = (props) => {

    const [ items, setItems ] = useState([]);

    useEffect(async () => {
        
        const response = await itemService.get();
        console.log(response.items)
        setItems(response.items)
        
    }, []);
    
    return (
        <div className='items-list'>
            { items.map(item => 
                <Item 
                    key={item._id} 
                    imageUrl={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    
                />
                )}
        </div>
    );
}

export default Home;