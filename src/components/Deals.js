import { useEffect, useState } from "react";
import itemService from '../services/item'; 
import ProductsList from './ProductsList/ProductsList'

const Deals = () => {

    const [ itemsOnSale, setItemsOnSale ] = useState([]);

    useEffect(async () => {
        const response = await itemService.get({ 'isOnSale': true });
        setItemsOnSale(response.items)
        
    }, []);

    console.log(itemsOnSale)

    return (
        <ProductsList items={itemsOnSale} />
    );
}

export default Deals;