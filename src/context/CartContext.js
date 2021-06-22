import React, { createContext, useContext, useReducer } from 'react';
//import item from '../services/item';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'CLEAR':
            return {
                cart: []
            }
    }
};


const CartProvider = ({ children }) => {
    const initialState = { cart: [] }

    const [ state, dispatch ] = useReducer(cartReducer, initialState);

    const addItem = (item) => {
        // if (item in cart): change quantity
        // else: add new item: dispatch('REMOVE_ITEM')
        // if
        //
        dispatch({ type: 'ADD_ITEM', payload: item });
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id})
    }

    return <CartContext.Provider value={{ state, addItem, removeItem}}>{ children }</CartContext.Provider>
}

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}

export { CartProvider, useCart };

 
