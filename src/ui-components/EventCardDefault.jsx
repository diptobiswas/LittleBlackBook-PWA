/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function EventCardDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="340px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EventCardDefault")}
      {...rest}
    >
      <View
        width="340px"
        height="100px"
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
      <View
        width="85px"
        height="75px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="13%"
        bottom="12%"
        left="5.29%"
        right="69.71%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,239,239,1)"
        {...getOverrideProps(overrides, "datetimeBox")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.71428680419922px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.09px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22%"
        bottom="48%"
        left="11.76%"
        right="75.88%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="day"
        {...getOverrideProps(overrides, "day")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.71428680419922px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.09px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="48%"
        bottom="22%"
        left="10.59%"
        right="74.71%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="mon"
        {...getOverrideProps(overrides, "mon")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="202px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13%"
        bottom="57%"
        left="35.29%"
        right="5.29%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="EventName"
        {...getOverrideProps(overrides, "EventName")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="202px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="51%"
        bottom="16%"
        left="35.29%"
        right="5.29%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="EventAddress"
        {...getOverrideProps(overrides, "EventAddress")}
      ></Text>
    </View>
  );
}
