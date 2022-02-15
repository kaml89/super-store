import "./Button.css";
import Button from "@mui/material/Button";
import { Spinner } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";

const CustomButton = ({ label, onClick, isLoading = false }) => {
  return (
    // <Button
    //   disabled={isLoading}
    //   onClick={onClick}
    //   startIcon={
    //     isLoading ? <CircularProgress color="inherit" size={25} /> : null
    //   }
    // >
    //   {label}
    // </Button>
    <button onClick={onClick} className="button">
      {isLoading ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default CustomButton;
