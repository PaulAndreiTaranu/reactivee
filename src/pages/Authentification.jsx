import React from "react";
import SignIn from "../components/SignIn.component";
import SignUp from "../components/SignUp.component";
import styled, { css } from "styled-components";

// STYLES
const Container = styled("div")`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin: 30px auto;
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
