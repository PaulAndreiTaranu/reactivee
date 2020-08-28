import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingBag } from "../assets/svg/shoppingBag.svg";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

// STYLES
const Container = styled("div")`
   width: 45px;
   height: 45px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   .shoppingBag {
      width: 24px;
      height: 24px;
   }

   .itemCount {
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
   }
`;

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
   return (
      <Container onClick={toggleCartHidden}>
         <ShoppingBag className="shoppingBag" />
         <span className="itemCount">{itemsCount}</span>
      </Container>
   );
};

const mapDispatchToProps = (dispatch) => ({ toggleCartHidden: () => dispatch(toggleCartHidden()) });

const mapStateToProps = createStructuredSelector({ itemsCount: selectCartItemsCount });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
