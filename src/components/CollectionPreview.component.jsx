import React from "react";
import { motion } from "framer-motion";
import CollectionItem from "./CollectionItem.component";
import styled from "styled-components";

const CollectionPreviewVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
};

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3vw;

  .title {
    font-size: 28px;
    margin-bottom: 2vw;
    color: var(--c-primary);
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

const CollectionPreview = ({ title, items }) => (
  <Container variants={CollectionPreviewVariants} initial="hidden" animate="visible">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item}>
            {items.name}
          </CollectionItem>
        ))}
    </div>
  </Container>
);

export default CollectionPreview;
