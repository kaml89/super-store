import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const NotificationContext = createContext();

const NotificationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.newNotification];

    case "REMOVE_NOTIFICATION":
      return [...state.filter((item) => item.id !== action.id)];

    default:
      return state;
  }
};

const NotificationProvider = ({ children }) => {
  const initialState = [];

  const [notifications, dispatch] = useReducer(
    NotificationReducer,
    initialState
  );

  const addNotification = (message) => {
    const newNotification = {
      message,
      id: uuidv4(),
    };

    dispatch({ type: "ADD_NOTIFICATION", newNotification });
    console.log(notifications);
  };

  const removeNotification = (id) => {
    dispatch({ type: "REMOVE_NOTIFICATION", id });
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};

export { NotificationProvider, useNotification };
