import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../components/CollectionPreview.component";
import { selectCollectionsForPreview } from "../redux/shop/shop.selector";
import styled from "styled-components";

// STYLES
const CollectionsOverviewContainer = styled("div")`
  width: 100vw;
  height: 90vh;
  padding: var(--padding);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({ collections: selectCollectionsForPreview });

export default connect(mapStateToProps)(CollectionsOverview);
