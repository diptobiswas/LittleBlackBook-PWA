/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function SavedTitleDesktop(props) {
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
      backgroundColor="rgba(0,110,212,1)"
      {...getOverrideProps(overrides, "SavedTitleDesktop")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="881px"
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
          left="25.09%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Saved&#xA;Resources"
          {...getOverrideProps(overrides, "Saved Resources")}
        ></Text>
        <Icon
          width="95px"
          height="112.29px"
          viewBox={{ minX: 0, minY: 0, width: 95, height: 112.29296875 }}
          paths={[
            {
              d: "M86.3906 0C87.5286 0 88.6172 0.222656 89.6562 0.667969C91.2891 1.3112 92.5879 2.32552 93.5527 3.71094C94.5176 5.09635 95 6.63021 95 8.3125L95 103.98C95 105.663 94.5176 107.197 93.5527 108.582C92.5879 109.967 91.2891 110.982 89.6562 111.625C88.7161 112.021 87.6276 112.219 86.3906 112.219C84.0156 112.219 81.9622 111.427 80.2305 109.844L47.5 78.375L14.7695 109.844C12.9883 111.477 10.9349 112.293 8.60938 112.293C7.47135 112.293 6.38281 112.07 5.34375 111.625C3.71094 110.982 2.41211 109.967 1.44727 108.582C0.482422 107.197 0 105.663 0 103.98L0 8.3125C0 6.63021 0.482422 5.09635 1.44727 3.71094C2.41211 2.32552 3.71094 1.3112 5.34375 0.667969C6.38281 0.222656 7.47135 0 8.60938 0L86.3906 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.35px"
          left="0px"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
