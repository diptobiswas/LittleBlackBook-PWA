/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function FeaturedPageMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="23px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeaturedPageMobile")}
      {...rest}
    >
      <Image
        width="340px"
        height="311.06px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="12.442397117614746px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "featuredimage")}
      ></Image>
      <Flex
        gap="15px"
        direction="column"
        width="340px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "Frame 57")}
      >
        <Text
          fontFamily="Inter"
          fontSize="29.861751556396484px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36.13950729370117px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.15px"
          width="328px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Featured_Title"
          {...getOverrideProps(overrides, "Featured_Title")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14.930875778198242px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.069753646850586px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="328px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Featured Details"
          {...getOverrideProps(overrides, "Featured Details")}
        ></Text>
      </Flex>
    </Flex>
  );
}
