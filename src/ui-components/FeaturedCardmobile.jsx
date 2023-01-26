/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function FeaturedCardmobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeaturedCardmobile")}
      {...rest}
    >
      <Image
        width="340px"
        height="300px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "background")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.17px"
        width="300px"
        height="72px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Featured_Title"
        {...getOverrideProps(overrides, "Featured_Title")}
      ></Text>
      <Flex
        padding="0px 0px 0px 0px"
        width="106.97px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "FeaturedLink")}
      >
        <Icon
          width="12px"
          height="12px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.970703125,
            height: 16.970458984375,
          }}
          paths={[
            {
              d: "M12 6L10.9425 4.9425L6.75 9.1275L6.75 0L5.25 0L5.25 9.1275L1.065 4.935L0 6L6 12L12 6Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="87.38%"
          bottom="-37.38%"
          left="92.07%"
          right="-3.29%"
          transformOrigin="top left"
          transform="rotate(-135deg)"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="17.73%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Learn More"
          {...getOverrideProps(overrides, "Learn More")}
        ></Text>
      </Flex>
    </Flex>
  );
}
