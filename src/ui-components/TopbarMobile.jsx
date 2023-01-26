/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
import Logo from "./Logo";
export default function TopbarMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="95px"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "TopbarMobile")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="390px"
        height="95px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 36")}
      >
        <View
          width="390px"
          height="95px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1167")}
        ></View>
        <Logo
          width="224px"
          height="23px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="36px"
          left="45px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "logo")}
        ></Logo>
      </Flex>
    </Flex>
  );
}
