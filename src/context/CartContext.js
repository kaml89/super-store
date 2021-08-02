import React, { createContext, useContext, useReducer } from 'react';
//import item from '../services/item';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state, action.item
            ];

        case 'INCREMENT_QUANTITY': 
            return [
                ...state.map(item => item.id === action.id ? 
                    { ...item,
                      quantity: item.quantity < item.stockCount ? item.quantity + 1 : item.quantity } : 
                    item
                )
            ];
        
        case 'DECREMENT_QUANTITY': 
            return [
                ...state.map(item => item.id === action.payload ? 
                    { ...item, quantity: item.quantity - 1 } : 
                    item
                )
            ];

        case 'REMOVE_FROM_CART':
            return [
                ...state.filter(item => item.id !== action.payload)
            ];
        case 'CLEAR':
            return [];
        default: 
            return state;
    }
};


const CartProvider = ({ children }) => {
    const initialState = [];

    const [ cart, dispatch ] = useReducer(cartReducer, initialState);

    const addItem = (item) => {
        const cartItem = cart.find(cartItem => cartItem.id === item.id);
        if ( cartItem ) {
            dispatch({ type: 'INCREMENT_QUANTITY', id: item.id})
        } else {
            dispatch({ type: 'ADD_TO_CART', item });
        }
    }

    const removeItem = (id) => {
        const cartItem = cart.find(cartItem => cartItem.id === id);
        if(cartItem.quantity === 1) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: id})
            
        } else {
            dispatch({ type: 'DECREMENT_QUANTITY', payload: id})
            console.log(cartItem.quantity)
        }
    }

    const getTotal = ( ) => 
         cart
             .reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    

    return <CartContext.Provider value={{ cart, addItem, removeItem, getTotal }}>{ children }</CartContext.Provider>
}

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}

export { CartProvider, useCart };

 
