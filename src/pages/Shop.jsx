import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import CollectionOverview from "../components/CollectionsOverview.component";
import Collection from "./Collection";

// STYLES
const ShopContainer = styled("div")``;

const Shop = ({ match }) => {
  return (
    <ShopContainer>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </ShopContainer>
  );
};

export default Shop;
