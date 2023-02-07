/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { FeaturedContent } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FeaturedPageMobileNew from "./FeaturedPageMobileNew";
import { Collection } from "@aws-amplify/ui-react";
export default function FeaturedPageMobileNewCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: FeaturedContent,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "FeaturedPageMobileNewCollection")}
      {...rest}
    >
      {(item, index) => (
        <FeaturedPageMobileNew
          featuredContent={item}
          margin="0px 0px 10px 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FeaturedPageMobileNew>
      )}
    </Collection>
  );
}