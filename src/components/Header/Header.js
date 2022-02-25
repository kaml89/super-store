import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddCircle from "@mui/icons-material/AddCircle";

const Header = ({ handleClick = null, label, isButton = false }) => {
  return (
    <Toolbar variant="dense" sx={{ backgroundColor: "white" }}>
      <Typography variant="h6" component="div" sx={{ flex: "1 1 100%" }}>
        {label}
      </Typography>
      {isButton ? (
        <Button
          onClick={() => handleClick()}
          variant="contained"
          startIcon={<AddCircle />}
        >
          Add
        </Button>
      ) : null}
    </Toolbar>
  );
};

export default Header;
