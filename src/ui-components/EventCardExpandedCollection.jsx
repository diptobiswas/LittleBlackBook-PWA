/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import EventCardExpanded from "./EventCardExpanded";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function EventCardExpandedCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="center"
      items={items || []}
      {...getOverrideProps(overrides, "EventCardExpandedCollection")}
      {...rest}
    >
      {(item, index) => (
        <EventCardExpanded
          width="auto"
          margin="30px 200px 30px 200px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></EventCardExpanded>
      )}
    </Collection>
  );
}
