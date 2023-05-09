/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function SearchTitleDesktop(props) {
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
      borderRadius="24.352941513061523px"
      padding="47px 101px 47px 101px"
      backgroundColor="rgba(0,212,47,1)"
      {...getOverrideProps(overrides, "SearchTitleDesktop")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="827px"
        height="130px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 35")}
      >
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="64px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.49px"
          width="660px"
          height="130px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="20.19%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search&#xA;Resources"
          {...getOverrideProps(overrides, "Saved Resources")}
        ></Text>
        <Icon
          width="113px"
          height="113px"
          viewBox={{ minX: 0, minY: 0, width: 113, height: 113 }}
          paths={[
            {
              d: "M110.463 95.6028L83.4353 68.5728C87.6487 61.6566 89.8711 53.7114 89.8578 45.6127C89.8578 21.172 68.6807 5.78375e-07 44.2423 5.78375e-07C38.4321 -0.000938997 32.6785 1.14289 27.3104 3.36615C21.9422 5.58942 17.0646 8.84856 12.9562 12.9574C8.84771 17.0663 5.58888 21.9443 3.36583 27.313C1.14278 32.6817 -0.000938907 38.4357 5.7832e-07 44.2465C5.7832e-07 68.6801 21.1771 89.8592 45.6083 89.8592C53.4394 89.8662 61.1304 87.7822 67.8868 83.8224L95.0573 111.01C96.335 112.284 98.066 113 99.8706 113C101.675 113 103.406 112.284 104.684 111.01L111.428 104.265C114.082 101.611 113.116 98.2565 110.463 95.6028ZM13.6174 44.2465C13.6165 40.2238 14.4079 36.2403 15.9465 32.5236C17.4852 28.8068 19.7408 25.4296 22.5847 22.5848C25.4286 19.74 28.805 17.4833 32.521 15.9437C36.2371 14.404 40.22 13.6116 44.2423 13.6116C61.1639 13.6116 76.2404 28.6823 76.2404 45.6127C76.2385 53.737 73.0106 61.528 67.2663 67.2728C61.5221 73.0176 53.7319 76.2458 45.6083 76.2477C28.6867 76.2405 13.6174 61.1626 13.6174 44.2465Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="6.15%"
          bottom="6.92%"
          left="0%"
          right="86.34%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
