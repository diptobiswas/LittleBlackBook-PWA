/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function FeaturedCardMobile(props) {
  const { featuredContent, overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="340px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="10px"
      padding="0px 0px 20px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "FeaturedCardMobile")}
      {...rest}
    >
      <Image
        width="unset"
        height="285px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={featuredContent?.image}
        {...getOverrideProps(overrides, "featured_image")}
      ></Image>
      <Flex
        gap="5px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 25px 0px 25px"
        {...getOverrideProps(overrides, "Frame 45")}
      >
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
          width="290px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={featuredContent?.Title}
          {...getOverrideProps(overrides, "Featured_Title")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="128.65px"
          height="23.51px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "FeaturedLink")}
        >
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
            width="98.86px"
            height="18.18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="21.27%"
            bottom="1.41%"
            left="0%"
            right="23.15%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Learn More"
            {...getOverrideProps(overrides, "Learn More")}
          ></Text>
          <Icon
            width="17.68px"
            height="17.68px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 26.41650390625,
              height: 23.5146484375,
            }}
            paths={[
              {
                d: "M17.6832 8.8416L16.1249 7.28327L9.9468 13.4503L9.9468 0L7.7364 0L7.7364 13.4503L1.56938 7.27222L0 8.8416L8.8416 17.6832L17.6832 8.8416Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="100%"
            bottom="-75.2%"
            left="89.73%"
            right="-3.48%"
            transformOrigin="top left"
            transform="rotate(-138.33deg)"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
      </Flex>
    </Flex>
  );
}
