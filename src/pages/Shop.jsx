import React, { Component } from "react";
import CollectionPreview from "../components/CollectionPreview.component";
import SHOP_DATA from "./Shop.data";

export default class Shop extends Component {
   constructor(props) {
      super(props);

      this.state = {
         collections: SHOP_DATA,
      };
   }

   render() {
      const { collections } = this.state;
      return (
         <div>
            {collections.map(({ id, ...otherCollectionProps }) => (
               <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
         </div>
      );
   }
}
