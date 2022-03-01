import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size="5rem" />
    </Box>
  );
};

export default LoadingScreen;
