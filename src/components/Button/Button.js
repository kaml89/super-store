import "./Button.css";
import { Spinner } from "react-bootstrap";

const Button = ({ label, onClick, isLoading = false }) => {
  return (
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

export default Button;
