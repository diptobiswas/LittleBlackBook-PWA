/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Organization } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import OrganizationButton from "./OrganizationButton";
import { Collection } from "@aws-amplify/ui-react";
export default function OrganizationButtonDesktopCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Organization,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Resources: await item.Resources.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "OrganizationButtonDesktopCollection")}
      {...rest}
    >
      {(item, index) => (
        <OrganizationButton
          organization={item}
          margin="10px 10px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></OrganizationButton>
      )}
    </Collection>
  );
}
