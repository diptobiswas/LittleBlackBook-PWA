/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function FeaturedCardmobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeaturedCardmobile")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="340px"
        height="300px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 43")}
      >
        <Image
          width="340px"
          height="300px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "background")}
        ></Image>
        <View
          width="340px"
          height="300px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-90deg, rgba(0,0,0,0), rgba(0,0,0,1))"
          {...getOverrideProps(overrides, "gradient")}
        ></View>
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
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="215px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Featured_Title"
          {...getOverrideProps(overrides, "Featured_Title")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="114.51px"
          height="23.51px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="255px"
          left="20px"
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
            width="88px"
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
            width="16.63px"
            height="16.63px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.5146484375,
              height: 23.5146484375,
            }}
            paths={[
              {
                d: "M16.6274 8.31372L15.1621 6.84843L9.35293 12.6472L9.35293 0L7.2745 0L7.2745 12.6472L1.47569 6.83804L0 8.31372L8.31372 16.6274L16.6274 8.31372Z",
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
            bottom="-70.71%"
            left="89.73%"
            right="-4.25%"
            transformOrigin="top left"
            transform="rotate(-135deg)"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
