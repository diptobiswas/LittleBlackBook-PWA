/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function FeaturedPageDesktop(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeaturedPageDesktop")}
      {...rest}
    >
      <Image
        width="1054px"
        height="500px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "featuredimage")}
      ></Image>
      <Flex
        gap="32px"
        direction="column"
        width="1054px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 30px 0px 30px"
        {...getOverrideProps(overrides, "Frame 49")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="58.09090805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.33px"
          width="981px"
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
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
          width="968px"
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
