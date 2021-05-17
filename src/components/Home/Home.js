import React, { useState, useEffect } from 'react';
import itemService from '../../services/item';
import ProductsList from '../ProductsList/ProductsList';
import Search from '../Search/Search'
import './Home.css'

const Home = (props) => {

    const [ items, setItems ] = useState([]);

    useEffect(async () => {
        
        const response = await itemService.get();
        setItems(response.items)
        
    }, []);
    
    return (
        <div>
            <Search />
            <ProductsList items = {items}/>
        </div>
 
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