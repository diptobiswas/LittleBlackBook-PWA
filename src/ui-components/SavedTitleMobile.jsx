/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function SavedTitleMobile(props) {
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
      backgroundColor="rgba(0,110,212,1)"
      {...getOverrideProps(overrides, "SavedTitleMobile")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="169px"
        height="142px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 38")}
      >
        <Icon
          width="57.53px"
          height="68px"
          viewBox={{ minX: 0, minY: 0, width: 57.5283203125, height: 68 }}
          paths={[
            {
              d: "M52.3146 0C53.0037 0 53.6629 0.134831 54.2921 0.404494C55.2809 0.794008 56.0674 1.40824 56.6517 2.24719C57.236 3.08614 57.5281 4.01498 57.5281 5.03371L57.5281 62.9663C57.5281 63.985 57.236 64.9139 56.6517 65.7528C56.0674 66.5918 55.2809 67.206 54.2921 67.5955C53.7228 67.8352 53.0637 67.9551 52.3146 67.9551C50.8764 67.9551 49.633 67.4757 48.5843 66.5169L28.764 47.4607L8.94382 66.5169C7.86517 67.5056 6.62172 68 5.21348 68C4.52434 68 3.86517 67.8652 3.23595 67.5955C2.24719 67.206 1.46067 66.5918 0.876404 65.7528C0.292135 64.9139 0 63.985 0 62.9663L0 5.03371C0 4.01498 0.292135 3.08614 0.876404 2.24719C1.46067 1.40824 2.24719 0.794008 3.23595 0.404494C3.86517 0.134831 4.52434 0 5.21348 0L52.3146 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="55.66px"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
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
          top="54.93%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Saved&#xA;Resources"
          {...getOverrideProps(overrides, "Saved Resources")}
        ></Text>
      </Flex>
    </Flex>
  );
}
