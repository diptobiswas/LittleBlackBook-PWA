/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function SearchBarMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="10px"
      padding="9px 16px 9px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SearchBarMobile")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(153,153,153,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="266px"
        height="16px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Placeholder for Search"
        {...getOverrideProps(overrides, "Placeholder for Search")}
      ></Text>
      <Icon
        width="27.42px"
        height="27.42px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 27.415283203125,
          height: 27.416015625,
        }}
        paths={[
          {
            d: "M26.6897 23.0453L20.65 17.0056C21.7016 15.3028 22.3374 13.3165 22.3374 11.1687C22.3374 5.00013 17.3372 0 11.1687 0C5.00013 0 0 5.00013 0 11.1687C0 17.3372 5.00013 22.3374 11.1687 22.3374C13.3165 22.3374 15.3028 21.7016 17.0039 20.6518L23.0453 26.6914C23.5315 27.1616 24.183 27.4218 24.8593 27.416C25.5355 27.4102 26.1825 27.1389 26.6606 26.6606C27.1387 26.1823 27.4097 25.5352 27.4151 24.8589C27.4206 24.1826 27.1601 23.5313 26.6897 23.0453ZM11.1687 18.9009C6.89881 18.9009 3.43652 15.4386 3.43652 11.1687C3.43652 6.89881 6.89881 3.43652 11.1687 3.43652C15.4386 3.43652 18.9009 6.89881 18.9009 11.1687C18.9009 15.4386 15.4386 18.9009 11.1687 18.9009Z",
            fill: "rgba(0,0,0,1)",
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
  );
}
