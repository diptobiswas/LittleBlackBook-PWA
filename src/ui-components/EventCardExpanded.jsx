/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function EventCardExpanded(props) {
  const { events, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="2px 0px 2px 0px"
      href={`${"/"}${events?.id}`}
      as="a"
      {...getOverrideProps(overrides, "EventCardExpanded")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="340px"
        height="317px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 47")}
      >
        <Image
          width="100%"
          height="71.6%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="28.4%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={events?.Image}
          {...getOverrideProps(overrides, "eventImage")}
        ></Image>
        <View
          width="340px"
          height="170px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="46.37%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "infoCard")}
        ></View>
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="216px"
          left="24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4937853080")}
        >
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
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={events?.Name}
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
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={events?.Address}
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
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="EventDescription"
            {...getOverrideProps(overrides, "EventDescription")}
          ></Text>
        </Flex>
        <Flex
          gap="5px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="164px"
          left="24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4937853105")}
        >
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={events?.Day}
            {...getOverrideProps(overrides, "Day")}
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={events?.Month}
            {...getOverrideProps(overrides, "Month")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
