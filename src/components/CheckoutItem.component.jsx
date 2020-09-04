import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../redux/cart/cart.actions";
import styled from "styled-components";

// STYLES
const CheckoutItemContainer = styled("div")`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & .quantity {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & div {
      cursor: pointer;
    }

    & span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10px;
    }
  }

  > * {
    text-transform: capitalize;
    width: 23%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child { width: 8%;

      & svg {
        cursor: pointer;
      }
    }
  }
`;

const Figure = styled("figure")`
  width: 23%;
  height: 100%;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 80% 20%;
    display: block;
  }
`;

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <Figure>
        <img src={imageUrl} alt="item" />
      </Figure>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10a.5.5 0 0 1-.832.374l-4.5-4a.5.5 0 0 1 0-.748l4.5-4A.5.5 0 0 1 10.5 4v8z"
            />
          </svg>
        </div>
        <span>{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"
            />
          </svg>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="removeButton" onClick={() => clearItem(cartItem)}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
          />
        </svg>
      </div>
    </CheckoutItemContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
