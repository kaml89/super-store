import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppProvider from "./providers/index";
// import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Deals from "./pages/Deals/Deals";
import Item from "./components/Item/Item";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/Navigation/Navigation";
import Notification from "./components/Notification/Notification";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { AdminRoute } from "./routes/PrivateRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";

const AdminDashboard = lazy(() =>
  import("./pages/AdminDashboard/AdminDashboard")
);

function App() {
  // const queryClient = new QueryClient();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <AppProvider>
            {/* <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <CartProvider>
                  <ThemeProvider theme={theme}>
                    <NotificationProvider> */}
            <Navigation />

            {/* <Notification /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/deals" component={Deals} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/item/:itemId" component={Item} />
              <AdminRoute path="/admin">
                <AdminDashboard />
              </AdminRoute>
            </Switch>
            {/* </NotificationProvider>
                  </ThemeProvider>
                </CartProvider>
              </AuthProvider> */}
            {/* <ReactQueryDevtools initialIsOpen /> */}
            {/* </QueryClientProvider> */}
          </AppProvider>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
