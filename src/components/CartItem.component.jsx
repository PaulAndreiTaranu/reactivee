import React from "react";
import styled from "styled-components";

// STYLES
const Container = styled("div")`
   width: 100%;
   height: 80px;
   margin-bottom: 15px;

   display: flex;
`;

const Image = styled("img")`
   width: 30%;
`;

const ItemDetails = styled("div")`
   width: 70%;
   padding: 10px 20px;

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
`;

const Detail = styled("span")`
   font-size: 1.5rem;
`;

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
   return (
      <Container>
         <Image src={imageUrl} alt="item" />
         <ItemDetails>
            <Detail>{name}</Detail>
            <Detail>
               {quantity} x {price}
            </Detail>
         </ItemDetails>
      </Container>
   );
};

export default CartItem;
