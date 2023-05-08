/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function EmergencyTitleMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="345px"
      height="193px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="20px"
      padding="14px 30px 14px 30px"
      backgroundColor="rgba(212,0,0,1)"
      {...getOverrideProps(overrides, "EmergencyTitleMobile")}
      {...rest}
    >
      <Icon
        width="91px"
        height="91px"
        viewBox={{ minX: 0, minY: 0, width: 91, height: 91 }}
        paths={[
          {
            d: "M84.5 91L6.5 91L6.5 84.5C6.5 79.1148 10.8647 74.75 16.25 74.75L74.75 74.75C80.1352 74.75 84.5 79.1148 84.5 84.5L84.5 91ZM45.5 13C43.7028 13 42.25 11.544 42.25 9.75L42.25 3.25C42.25 1.456 43.7028 0 45.5 0C47.2972 0 48.75 1.456 48.75 3.25L48.75 9.75C48.75 11.544 47.2972 13 45.5 13ZM20.2215 23.4715C19.3895 23.4715 18.5575 23.153 17.9237 22.5192L13.3282 17.9237C12.0575 16.653 12.0575 14.599 13.3282 13.3282C14.599 12.0575 16.653 12.0575 17.9237 13.3282L22.5192 17.9237C23.79 19.1945 23.79 21.2485 22.5192 22.5192C21.8822 23.153 21.0535 23.4715 20.2215 23.4715ZM70.7785 23.4715C69.9465 23.4715 69.1145 23.153 68.4807 22.5192C67.21 21.2485 67.21 19.1945 68.4807 17.9237L73.0762 13.3282C74.347 12.0575 76.401 12.0575 77.6718 13.3282C78.9425 14.599 78.9425 16.653 77.6718 17.9237L73.0762 22.5192C72.4425 23.153 71.6105 23.4715 70.7785 23.4715ZM9.75 48.75L3.25 48.75C1.45275 48.75 0 47.294 0 45.5C0 43.706 1.45275 42.25 3.25 42.25L9.75 42.25C11.5472 42.25 13 43.706 13 45.5C13 47.294 11.5472 48.75 9.75 48.75ZM87.75 48.75L81.25 48.75C79.4528 48.75 78 47.294 78 45.5C78 43.706 79.4528 42.25 81.25 42.25L87.75 42.25C89.5472 42.25 91 43.706 91 45.5C91 47.294 89.5472 48.75 87.75 48.75ZM71.5 68.25L71.5 45.5C71.5 31.1643 59.8358 19.5 45.5 19.5C31.1643 19.5 19.5 31.1643 19.5 45.5L19.5 68.25L71.5 68.25ZM45.6105 32.097C46.059 30.3583 47.8335 29.3215 49.569 29.7635C55.2858 31.2423 59.7577 35.7142 61.2365 41.4342C61.6882 43.173 60.6418 44.9443 58.9062 45.396C58.6333 45.4675 58.357 45.5 58.0872 45.5C56.6442 45.5 55.3215 44.5283 54.9445 43.0625C54.0573 39.6273 51.3695 36.946 47.944 36.0588C46.2053 35.6103 45.162 33.8358 45.6105 32.097Z",
            fill: "rgba(255,255,255,1)",
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
        width="279px"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="24/7 Emergency&#xA;& Crisis Helplines"
        {...getOverrideProps(overrides, "24/7 Emergency & Crisis Helplines")}
      ></Text>
    </Flex>
  );
}
