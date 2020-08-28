import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../redux/cart/cart.selectors";
import styled from "styled-components";

// STYLES
const Container = styled("div")`
   width: 80vw;
   min-height: 80vh;

   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Header = styled("div")`
   width: 100%;
   padding: 10px 0;
   border-bottom: 1px solid darkgrey;

   display: flex;
   justify-content: space-between;
`;

const HeaderCol = styled("div")`
   text-transform: capitalize;
   width: 23%;

   &:last-child {
      width: 8%;
   }
`;

const Checkout = () => {
   return (
      <Container>
         <Header>
            <HeaderCol>
               <span>Product</span>
            </HeaderCol>
            <HeaderCol>
               <span>Description</span>
            </HeaderCol>
            <HeaderCol>
               <span>Quantity</span>
            </HeaderCol>
            <HeaderCol>
               <span>Price</span>
            </HeaderCol>
            <HeaderCol>
               <span>Remove</span>
            </HeaderCol>
         </Header>
      </Container>
   );
};

export default Checkout;
