import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styled from "https://cdn.skypack.dev/styled-components@5.3.1";

const LoginPage = () => {
  const navigate = useNavigate();

  const Card2 = styled.div`
    background-color: lightblue;
    width: 300px;
    margin: 30px auto;
    minheight: 200px;
    boxsizing: border-box;
  `;

  const CardComponent = {
    //top div
    width: "300px",
    margin: "30px auto",
    background: "lightblue",
    minHeight: "200px",
    boxSizing: "border-box",
  };

  const Header = {
    //h1
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontSize: "22px",
  };

  const ErrorMessage = {
    color: "white",
    fontSize: "13px",
    textAlign: "center",
  };

  return (
    <div style={{ width: "90%", margin: "10px", textAlign: "center" }}>
      <Button onClick={() => navigate("/login-form")}>Please Log In</Button>
      <Button onClick={() => navigate("/guest")}>Continue As Guest</Button>
      <Button onClick={() => navigate("/signup")}>Sign Up</Button>
    </div>
  );
};

export default LoginPage;
