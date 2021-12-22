import { useAuth } from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

export const AdminRoute = ({ children, ...rest }) => {
  const { isAdmin, isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated() && isAdmin() ? children : <Redirect to="/" />
      }
    ></Route>
  );
};

export const AuthenticatedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated() ? { children } : <Redirect to="/" />)}
    ></Route>
  );
};
