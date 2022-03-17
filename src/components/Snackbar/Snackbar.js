import { SnackbarProvider } from "notistack";

const Snackbar = ({ children }) => {
  return <SnackbarProvider maxSnack={5}>{children}</SnackbarProvider>;
};

export default Snackbar;
