/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Resource } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ResourceCard from "./ResourceCard";
import { Collection } from "@aws-amplify/ui-react";
export default function SavedResourceCardCollectionMobile(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "SaveStatus",
    operand: "true",
    operator: "eq",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Resource,
    criteria: itemsFilter,
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
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search Resources"
      itemsPerPage={4}
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SavedResourceCardCollectionMobile")}
      {...rest}
    >
      {(item, index) => (
        <ResourceCard
          resource={item}
          height="auto"
          margin="0 auto 0 auto"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ResourceCard>
      )}
    </Collection>
  );
}
