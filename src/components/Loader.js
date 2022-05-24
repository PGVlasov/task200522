import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{ width: "10rem", height: "10rem", marginTop: "300px" }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
