import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

// STYLES
const Container = styled(motion.button)`
   cursor: pointer;
   font: 62.5%/1.5 var(--ff-primary);
   min-width: 165px;
   width: auto;
   height: 50px;
   letter-spacing: 0.5px;
   line-height: 50px;
   background-color: #000;
   color: #fff;
   text-transform: uppercase;
   border: 1px solid transparent;

   display: flex;
   justify-content: center;
   align-items: center;
`;

const CustomButton = ({ children, variants, ...otherProps }) => {
   return (
      <Container variants={variants} {...otherProps}>
         {children}
      </Container>
   );
};

export default CustomButton;
