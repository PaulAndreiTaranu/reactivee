import React, { Component } from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem.component";
import styled, { css } from "styled-components";

// STYLES
const Container = styled(motion.div)`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

const DirectoryVariants = {
   hidden: { opacity: 1, scale: 0 },
   visible: { opacity: 1, scale: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
};

export default class Directory extends Component {
   constructor() {
      super();

      this.state = {
         sections: [
            {
               title: "hats",
               imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
               id: 1,
               linkUrl: "shop/hats",
            },
            {
               title: "jackets",
               imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
               id: 2,
               linkUrl: "shop/jackets",
            },
            {
               title: "sneakers",
               imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
               id: 3,
               linkUrl: "shop/sneakers",
            },
            {
               title: "womens",
               imageUrl: require("../assets/images/womenClothes.jpg"),
               size: "large",
               id: 4,
               linkUrl: "shop/womens",
            },
            {
               title: "mens",
               imageUrl: require("../assets/images/menClothes.jpg"),
               size: "large",
               id: 5,
               linkUrl: "shop/mens",
            },
         ],
      };
   }

   render() {
      return (
         <Container variants={DirectoryVariants} initial="hidden" animate="visible">
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
               <MenuItem key={id} {...otherSectionProps} />
            ))}
         </Container>
      );
   }
}
