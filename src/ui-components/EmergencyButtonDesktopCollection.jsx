/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Emergency } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import EmergencyButtonDesktop from "./EmergencyButtonDesktop";
import { Collection } from "@aws-amplify/ui-react";
export default function EmergencyButtonDesktopCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Emergency,
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
      type="grid"
      searchPlaceholder="Search..."
      templateRows="1fr 1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "EmergencyButtonDesktopCollection")}
      {...rest}
    >
      {(item, index) => (
        <EmergencyButtonDesktop
          emergency={item}
          height="auto"
          width="500px"
          margin="0 10px 20px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></EmergencyButtonDesktop>
      )}
    </Collection>
  );
}