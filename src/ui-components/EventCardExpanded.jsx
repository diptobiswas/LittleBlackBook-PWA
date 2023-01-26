/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function EventCardExpanded(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="340px"
      height="366px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EventCardExpanded")}
      {...rest}
    >
      <View
        width="340px"
        height="366px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0.55%"
        bottom="-0.55%"
        left="0%"
        right="0%"
        boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "background")}
      ></View>
      <Image
        width="100%"
        height="62.01%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0.55%"
        bottom="37.44%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "eventImage")}
      ></Image>
      <View
        width="340px"
        height="219px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="40.71%"
        bottom="-0.55%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "infoCard")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="292px"
        height="32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="53.01%"
        bottom="38.25%"
        left="7.06%"
        right="7.06%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="EventName"
        {...getOverrideProps(overrides, "EventName")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="292px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="62.57%"
        bottom="30.87%"
        left="7.06%"
        right="7.06%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="EventAddress"
        {...getOverrideProps(overrides, "EventAddress")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="292px"
        height="80px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="72.4%"
        bottom="5.74%"
        left="7.06%"
        right="7.06%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="EventDescription"
        {...getOverrideProps(overrides, "EventDescription")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.17px"
        width="292px"
        height="32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="44.26%"
        bottom="46.99%"
        left="7.06%"
        right="7.06%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Day_and_Month"
        {...getOverrideProps(overrides, "Day_and_Month")}
      ></Text>
    </View>
  );
}
