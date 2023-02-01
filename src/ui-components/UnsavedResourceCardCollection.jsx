/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Resource } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ResourceCard from "./ResourceCard";
import { Collection } from "@aws-amplify/ui-react";
export default function UnsavedResourceCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Resource,
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
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "UnsavedResourceCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ResourceCard
          height="auto"
          width="auto"
          margin="0 0 0 0"
          resource={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ResourceCard>
      )}
    </Collection>
  );
}
