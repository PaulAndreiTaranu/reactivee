import React from "react";
import Directory from "../components/Directory.component";
import styled, { css } from "styled-components";

// STYLES
const Container = styled("div")`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

function homepage() {
   return (
      <Container>
         <Directory />
      </Container>
   );
}

export default homepage;
