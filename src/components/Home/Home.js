import React, { useState, useEffect } from 'react';
import itemService from '../../services/item';
import Item from '../Item/Item';
import ProductsList from '../ProductsList/ProductsList';
import './Home.css'

const Home = (props) => {

    const [ items, setItems ] = useState([]);

    useEffect(async () => {
        
        const response = await itemService.get();
        setItems(response.items)
        
    }, []);
    
    return (
        <ProductsList items = {items}/>
        // <div className='items-list'>
        //     { items.map(item => 
        //         <Item 
        //             key={item._id} 
        //             imageUrl={item.imageUrl}
        //             name={item.name}
        //             price={item.price}
        //             avgRating={item.avgRating}
                    
        //         />
        //         )}
        // </div>
    );
}

export default Home;