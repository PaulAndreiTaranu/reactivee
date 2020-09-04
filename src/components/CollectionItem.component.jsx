import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton.component";
import { addItem } from "../redux/cart/cart.actions";
import styled from "styled-components";

// STYLES
const Container = styled(motion.div)`
  width: 22%;
  height: 350px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & .image {
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.imageUrl});
    margin-bottom: 5px;
  }

  & .collectionFooter {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;

    & .name {
      width: 90%;
      margin-bottom: 15px;
    }

    & .price {
      width: 10%;
    }
  }

  & :nth-child(3) {
    font-size: calc(1rem + 0.5vw);
    width: 100%;
    opacity: 0.5;
    position: absolute;
    top: 255px;
  }
`;

const variants = id => {
  if ((id + 1) % 2 === 0) {
    return {
      hidden: { x: "100vw", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
      hover: { scale: 1.1, zIndex: 100 },
    };
  } else {
    return {
      hidden: { x: "-100vw", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.75 } },
      hover: { scale: 1.1, zIndex: 100 },
    };
  }
};

const buttonVariants = {
  hidden: { y: "100vh", opacity: 0, backgroundColor: "#fff", width: "90%", color: "#000" },
  visible: { y: 0, opacity: 0.5, transition: { duration: 0.2 } },
  hover: { opacity: 0.9, backgroundColor: "#000", color: "#fff", transition: { duration: 0.3 } },
};

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <Container variants={variants(id)} initial="hidden" animate="visible" whileHover="hover" imageUrl={imageUrl}>
      <div className="image" />
      <div className="collectionFooter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} variants={buttonVariants}>
        Add to cart
      </CustomButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
