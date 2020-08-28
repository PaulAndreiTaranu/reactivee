import React from "react";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

// STYLES
const Container = styled(motion.div)`
   position: relative;
   min-width: 30%;
   height: ${(props) => (props.size === "large" ? "50vh" : "30vh")};
   margin: 1vw;
   background-position: center;
   background-size: cover;
   overflow: hidden;

   flex: 1 1 auto;
   display: flex;
   align-items: center;
   justify-content: center;

   & .figure {
      z-index: 1;
      position: absolute;
      overflow: hidden;
      height: 100%;
      width: 100%;

      & img {
         height: 100%;
         width: 100%;
         object-fit: cover;
         object-position: 80% 20%;
         display: block;
      }
   }

   .content {
      z-index: 2;
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;

      .title {
         text-transform: uppercase;
         font-weight: bold;
         margin-bottom: 6px;
         font-size: 22px;
         color: #4a4a4a;
      }

      .subtitle {
         font-weight: lighter;
         font-size: 16px;
      }
   }
`;

const childVariants = {
   hidden: { y: 400, opacity: 0 },
   visible: { y: 0, opacity: 1 },
   hover: { scale: 1.1, zIndex: 100 },
};

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   return (
      <Container
         variants={childVariants}
         size={size}
         whileHover={childVariants.hover}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
         <figure className="figure">
            <img src={imageUrl} alt="MenuItem Background" />
         </figure>
         <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
         </div>
      </Container>
   );
};

export default withRouter(MenuItem);
