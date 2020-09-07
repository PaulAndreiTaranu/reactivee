import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { motion } from "framer-motion";

import { selectDirectorySections } from "../redux/directory/directory.selector";
import MenuItem from "./MenuItem.component";
import styled from "styled-components";

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

const Directory = ({ sections }) => {
  return (
    <Container variants={DirectoryVariants} initial="hidden" animate="visible">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });

export default connect(mapStateToProps)(Directory);
