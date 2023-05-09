/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function FeaturedCardMobile(props) {
  const { featuredContent, overrides, ...rest } = props;
  const featuredCardMobileOnClick = useNavigateAction({
    type: "url",
    url: "/Featured",
  });
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
      onClick={() => {
        featuredCardMobileOnClick();
      }}
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
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Learn More"
            {...getOverrideProps(overrides, "Learn More")}
          ></Text>
          <Icon
            width="19.24px"
            height="17.68px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 27.578369140625,
              height: 24.548828125,
            }}
            paths={[
              {
                d: "M19.2385 8.8416L17.5431 7.28327L10.8217 13.4503L10.8217 0L8.41685 0L8.41685 13.4503L1.70742 7.27222L0 8.8416L9.61926 17.6832L19.2385 8.8416Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
      </Flex>
    </Flex>
  );
}
