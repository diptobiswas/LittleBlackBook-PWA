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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function OrganizationButton(props) {
  const { organization, overrides, ...rest } = props;
  const organizationButtonOnClick = useNavigateAction({
    type: "url",
    url: "/Resources",
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="10px"
      padding="12px 29px 12px 29px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        organizationButtonOnClick();
      }}
      {...getOverrideProps(overrides, "OrganizationButton")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="28.02395248413086px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="37.36526870727539px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.13px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={organization?.Name}
        {...getOverrideProps(overrides, "Organization_Name")}
      ></Text>
    </Flex>
  );
}
