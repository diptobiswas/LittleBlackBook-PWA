/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function FeaturedCardDesktop(props) {
  const { featuredContent, overrides, ...rest } = props;
  return (
    <Flex
      gap="30px"
      direction="column"
      width="650px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="20px"
      padding="0px 0px 40px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "FeaturedCardDesktop")}
      {...rest}
    >
      <Image
        width="unset"
        height="434px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={featuredContent?.image}
        {...getOverrideProps(overrides, "featuredimage")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        width="598px"
        height="88.69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 46")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="159px"
          height="30.69px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="58px"
          left="0px"
          {...getOverrideProps(overrides, "FeaturedLink")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="135.85px"
            height="30.15px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0%"
            bottom="1.74%"
            left="0%"
            right="14.56%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Learn More"
            {...getOverrideProps(overrides, "Learn More")}
          ></Text>
          <Icon
            width="16.5px"
            height="16.5px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.1484375,
              height: 23.5146484375,
            }}
            paths={[
              {
                d: "M16.4985 8.24925L15.0446 6.79532L9.28041 12.5492L9.28041 0L7.21809 0L7.21809 12.5492L1.46424 6.78501L0 8.24925L8.24925 16.4985L16.4985 8.24925Z",
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
            bottom="-53.76%"
            left="92.72%"
            right="-3.1%"
            transformOrigin="top left"
            transform="rotate(-134.55deg)"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="48px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.33px"
          width="598px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={featuredContent?.Title}
          {...getOverrideProps(overrides, "Featured_Title")}
        ></Text>
      </Flex>
    </Flex>
  );
}
