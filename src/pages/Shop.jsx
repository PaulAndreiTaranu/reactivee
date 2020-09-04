import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../components/CollectionPreview.component";
import { selectCollections } from "../redux/shop/shop.selector";
import styled from "styled-components";

// STYLES
const Container = styled("div")`
  width: 100vw;
  height: 90vh;
  padding: var(--padding);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Shop = ({ collections }) => {
  return (
    <Container>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({ collections: selectCollections });

export default connect(mapStateToProps)(Shop);
