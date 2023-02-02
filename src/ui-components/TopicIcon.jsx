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
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function TopicIcon(props) {
  const { topic, overrides, ...rest } = props;
  const iconOnClick = useNavigateAction({ type: "url", url: "/Resources" });
  return (
    <Flex
      gap="11px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TopicIcon")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="120px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        onClick={() => {
          iconOnClick();
        }}
        {...getOverrideProps(overrides, "icon")}
      >
        <View
          width="120px"
          height="120px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "background")}
        ></View>
        <Image
          width="80px"
          height="80px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="19px"
          left="19px"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src={topic?.Icon}
          {...getOverrideProps(overrides, "Brain")}
        ></Image>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={topic?.Name}
        {...getOverrideProps(overrides, "Topic_Name")}
      ></Text>
    </Flex>
  );
}
