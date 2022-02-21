import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddCircle from "@mui/icons-material/AddCircle";

const TableToolbar = ({ handleClick }) => {
  return (
    <Toolbar variant="dense" sx={{ backgroundColor: "white" }}>
      <Typography variant="h6" component="div" sx={{ flex: "1 1 100%" }}>
        Store items
      </Typography>
      <Button
        onClick={() => handleClick()}
        variant="contained"
        startIcon={<AddCircle />}
      >
        Add
      </Button>
    </Toolbar>
  );
};

export default TableToolbar;
