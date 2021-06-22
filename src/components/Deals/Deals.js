import { useEffect, useState } from "react";
import itemService from '../../services/item'; 
import ProductsList from '../ProductsList/ProductsList'

const Deals = () => {

    const [ itemsOnSale, setItemsOnSale ] = useState([]);

    const fetchData = async () => {
        const response = await itemService.get({ 'isOnSale': true });
        setItemsOnSale(response.items)
    };

    useEffect(() => {
        fetchData();
    }, []);

    //console.log(itemsOnSale)

    return (
        <div>
        {
            itemsOnSale.length !== 0 ? <ProductsList items={itemsOnSale} /> :
                'Currenty there are no items on sale :('
        }
        </div>
    );
}

export default Deals;