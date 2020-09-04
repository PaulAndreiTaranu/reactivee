import React from "react";
import Directory from "../components/Directory.component";
import styled from "styled-components";

// STYLES
const Container = styled("div")`
  width: 100vw;
  height: 90vh;
  padding: var(--padding);

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
