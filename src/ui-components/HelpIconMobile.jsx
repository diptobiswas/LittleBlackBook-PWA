/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function HelpIconMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="364px"
      height="117px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HelpIconMobile")}
      {...rest}
    >
      <View
        width="364px"
        height="117px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0.62%"
        bottom="-0.62%"
        left="0%"
        right="0%"
        boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainButton")}
      ></View>
      <Icon
        width="80.81px"
        height="81.17px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 80.80810546875,
          height: 81.168701171875,
        }}
        paths={[
          {
            d: "M80.808 40.5844C80.808 62.9985 62.7185 81.1687 40.404 81.1687C18.0895 81.1687 0 62.9985 0 40.5844C0 18.1702 18.0895 0 40.404 0C62.7185 0 80.808 18.1702 80.808 40.5844Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.25%"
        bottom="14.38%"
        left="6.4%"
        right="71.4%"
        {...getOverrideProps(overrides, "ServiceIcon")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.07px"
        width="177px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23.93%"
        bottom="55.56%"
        left="32.97%"
        right="18.41%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Name of service"
        {...getOverrideProps(overrides, "Name of service")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.17px"
        width="203px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="61.54%"
        bottom="14.53%"
        left="32.97%"
        right="11.26%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="905-111-1111"
        {...getOverrideProps(overrides, "Phone#")}
      ></Text>
    </View>
  );
}
