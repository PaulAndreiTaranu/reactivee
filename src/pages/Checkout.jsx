import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../components/CheckoutItem.component";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import styled from "styled-components";

// STYLES
const Container = styled("div")`
  width: 80vw;
  height: 90vh;
  padding: var(--padding);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled("div")`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
  font-size: 2rem;

  display: flex;
  justify-content: space-between;
`;

const HeaderCol = styled("div")`
  text-transform: capitalize;
  width: 23%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    width: 8%;
  }
`;

const Checkout = ({ cartItems, total }) => {
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
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div>
        <span>Total: ${total}</span>
      </div>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems, total: selectCartTotal });

export default connect(mapStateToProps)(Checkout);
