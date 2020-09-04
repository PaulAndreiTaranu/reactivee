import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CustomButton from "./CustomButton.component";
import CartItem from "./CartItem.component";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { toggleCartHidden } from "../redux/cart/cart.actions";

// STYLES
const Container = styled("div")`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  & ::-webkit-scrollbar {
    display: none;
  }
`;

const CartItems = styled("div")`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  button {
    margin-top: auto;
  }
`;

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <Container>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </CartItems>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        CHEKCOUT
      </CustomButton>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });

export default withRouter(connect(mapStateToProps)(CartDropdown));
