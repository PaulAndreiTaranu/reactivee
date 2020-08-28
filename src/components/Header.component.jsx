// IMPORTS
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "./CartIcon.component";
import CartDropdown from "./CartDropdown.component";
import { auth } from "../firebase/firebase.utils";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { ReactComponent as Logo } from "../assets/svg/crown.svg";

// STYLES
const Container = styled("div")`
   height: 70px;
   width: 100%;
   font-size: 2rem;

   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 25px;
`;

const LogoLink = styled(Link)`
   height: 100%;
   width: 70px;

   display: flex;
   align-items: center;
   justify-content: center;
`;

const Options = styled("div")`
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

const OptionLink = styled(Link)`
   padding: 10px 15px;
   cursor: pointer;
`;

// MAIN
const Header = ({ currentUser, hidden }) => {
   return (
      <Container>
         <LogoLink to="/">
            <Logo />
         </LogoLink>

         <Options>
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/contact">Contact</OptionLink>
            {currentUser ? (
               <OptionLink as="div" onClick={() => auth.signOut()}>
                  Sign Out
               </OptionLink>
            ) : (
               <OptionLink to="/auth">Sign In</OptionLink>
            )}
            <CartIcon />
         </Options>

         {hidden ? "" : <CartDropdown />}
      </Container>
   );
};

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser, hidden: selectCartHidden });

export default connect(mapStateToProps)(Header);
