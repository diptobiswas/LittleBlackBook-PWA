/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import TopicIcon from "./TopicIcon";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function TopicIconCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "TopicIconCollection")}
      {...rest}
    >
      {(item, index) => (
        <TopicIcon
          height="auto"
          width="auto"
          margin="75px 75px 75px 75px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TopicIcon>
      )}
    </Collection>
  );
}
