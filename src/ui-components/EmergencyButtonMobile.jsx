/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function EmergencyButtonMobile(props) {
  const { emergency, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="10px"
      padding="12px 29px 12px 29px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EmergencyButtonMobile")}
      {...rest}
    >
      <Flex
        gap="25px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 34")}
      >
        <Image
          width="62px"
          height="62px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src={emergency?.Icon}
          {...getOverrideProps(overrides, "fire")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="28.02395248413086px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="37.36526870727539px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.13px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={emergency?.Name}
          {...getOverrideProps(overrides, "Service_Name")}
        ></Text>
      </Flex>
    </Flex>
  );
}
