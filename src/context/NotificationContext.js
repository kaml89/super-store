import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const NotificationContext = createContext();

const NotificationReducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_NOTIFICATION':
            return [...state, action.notification];

        case 'REMOVE_NOTIFICATION':
            return [ ...state.filter(item => item.id !== action.id) ]
    }
}

const NotificationProvider = ({ children}) => {
    const initialState = [];

    const [ notifications, dispatch ] = useReducer(NotificationReducer, initialState);

    const createNotification = (message) => {
        const notification = {
            message,
            id: uuidv4()
        }

        dispatch({ type: 'CREATE_NOTIFICATION', notification})
    }

    const removeNotification = (id) => {
        dispatch({ type: 'REMOVE_NOTIFICATION', id})
    }

    


    return <NotificationContext.Provider value={{ notifications, createNotification, removeNotification }}> children </NotificationContext.Provider>
}

const useNotification = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) throw new Error('useNotification must be used within NotificationProvider')
    return context;
};

export { NotificationProvider, useNotification };