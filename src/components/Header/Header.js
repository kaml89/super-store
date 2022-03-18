import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddCircle from "@mui/icons-material/AddCircle";

const Header = ({ handleClick = null, label, isButton = false }) => {
  return (
    <Toolbar variant="dense" sx={{ backgroundColor: "white", padding: "20px" }}>
      <Typography variant="h3" component="div" sx={{ flex: "1 1 100%" }}>
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
Header.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  isBUtton: PropTypes.bool,
};

export default Header;
