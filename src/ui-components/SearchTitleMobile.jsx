/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function SearchTitleMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="20px"
      padding="20px 30px 20px 30px"
      backgroundColor="rgba(0,212,47,1)"
      {...getOverrideProps(overrides, "SearchTitleMobile")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="169px"
        height="133px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 38")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="32px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.17px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="51.88%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search&#xA;Resources"
          {...getOverrideProps(overrides, "Search Resources")}
        ></Text>
        <Icon
          width="59px"
          height="59px"
          viewBox={{ minX: 0, minY: 0, width: 59, height: 59 }}
          paths={[
            {
              d: "M57.6752 49.9165L43.5636 35.8035C45.7635 32.1924 46.9239 28.044 46.9169 23.8155C46.9169 11.0544 35.8598 3.01984e-07 23.1 3.01984e-07C20.0663 -0.000490273 17.0622 0.59673 14.2594 1.75755C11.4566 2.91837 8.90986 4.62004 6.76473 6.76538C4.6196 8.91071 2.91809 11.4577 1.75738 14.2608C0.596673 17.0639 -0.000490226 20.0682 3.01955e-07 23.1022C3.01955e-07 35.8595 11.0571 46.9176 23.8132 46.9176C27.902 46.9213 31.9177 45.8332 35.4453 43.7657L49.6317 57.9608C50.2988 58.6263 51.2026 59 52.1448 59C53.0871 59 53.9908 58.6263 54.658 57.9608L58.1793 54.4391C59.5647 53.0536 59.0606 51.3021 57.6752 49.9165ZM7.10998 23.1022C7.10949 21.0018 7.52272 18.9219 8.32607 16.9813C9.12942 15.0407 10.3072 13.2774 11.792 11.792C13.2769 10.3067 15.0398 9.12844 16.98 8.32456C18.9202 7.52068 20.9998 7.10692 23.1 7.10692C31.9352 7.10692 39.8069 14.9757 39.8069 23.8155C39.8059 28.0574 38.1206 32.1253 35.1214 35.1247C32.1222 38.1242 28.0547 39.8097 23.8132 39.8107C14.978 39.807 7.10998 31.9345 7.10998 23.1022Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="55.64%"
          left="31.95%"
          right="33.14%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
