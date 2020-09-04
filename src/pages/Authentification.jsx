import React from "react";
import SignIn from "../components/SignIn.component";
import SignUp from "../components/SignUp.component";
import styled from "styled-components";

// STYLES
const Container = styled("div")`
  width: 100vw;
  height: 90vh;
  margin: 30px auto;
  padding: var(--padding);

  display: flex;
  justify-content: space-between;
`;

const Authentification = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default Authentification;
