/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function EmergencyButtonDesktop(props) {
  const { emergency, overrides, ...rest } = props;
  return (
    <Flex
      gap="25px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="20px"
      padding="30px 46px 30px 30px"
      backgroundColor="rgba(255,255,255,1)"
      as="a"
      href={`${"tel:"}${emergency?.Phone}`}
      {...getOverrideProps(overrides, "EmergencyButtonDesktop")}
      {...rest}
    >
      <Image
        width="106px"
        height="106px"
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
      <Flex
        gap="14px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 37")}
      >
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.13px"
          width="258px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={emergency?.Name}
          {...getOverrideProps(overrides, "Name of service")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="42px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.21px"
          width="258px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={emergency?.Phone}
          {...getOverrideProps(overrides, "Phone#")}
        ></Text>
      </Flex>
    </Flex>
  );
}
