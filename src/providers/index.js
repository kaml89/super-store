import { CartProvider } from "../context/CartContext";
import { NotificationProvider } from "../context/NotificationContext";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import Snackbar from "../components/Snackbar/Snackbar";
import { theme } from "../themes/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const AppProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <Snackbar>{children}</Snackbar>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
