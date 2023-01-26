/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function FeaturedCardDesktop(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="737px"
      height="490px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeaturedCardDesktop")}
      {...rest}
    >
      <Image
        width="737px"
        height="490px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="461.69px"
        left="44px"
        boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "background")}
      ></Image>
    </View>
  );
}
