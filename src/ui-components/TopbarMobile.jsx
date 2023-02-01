/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import { Flex } from "@aws-amplify/ui-react";
export default function TopbarMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="314px"
      height="95px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 15px rgba(0, 0, 0, 0.10000000149011612)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "TopbarMobile")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="36px 45px 36px 45px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Frame 36")}
      >
        <Logo
          width="224px"
          height="23px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "logo")}
        ></Logo>
      </Flex>
    </Flex>
  );
}
