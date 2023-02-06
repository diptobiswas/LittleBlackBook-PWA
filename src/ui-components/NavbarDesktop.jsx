/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function NavbarDesktop(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        logo: {},
        Vector37853004: {},
        SirenBackground: {},
        Vector36753944: {},
        "Group 32": {},
        ProfileBackground: {},
        ServiceIcon: {},
        "Group 33": {},
        "Group 48": {},
        NavbarDesktop: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const vectorThreeSevenEightFiveThreeZeroZeroFourOnClick = useNavigateAction({
    type: "url",
    url: "/Saved",
  });
  const groupThreeTwoOnClick = useNavigateAction({
    type: "url",
    url: "/emergency",
  });
  const groupThreeThreeOnClick = useNavigateAction({
    type: "url",
    url: "/profile",
  });
  return (
    <Flex
      gap="56px"
      direction="row"
      width="649px"
      height="95px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="13px 44px 13px 44px"
      backgroundColor="rgba(0,0,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavbarDesktop")}
      {...rest}
    >
      <Logo
        width="224px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "logo")}
      ></Logo>
      <Flex
        padding="0px 0px 0px 0px"
        width="281px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 48")}
      >
        <Icon
          width="35px"
          height="41px"
          viewBox={{ minX: 0, minY: 0, width: 35, height: 41 }}
          paths={[
            {
              d: "M31.8281 0C32.2474 0 32.6484 0.0812954 33.0312 0.243886C33.6328 0.47874 34.1113 0.849086 34.4668 1.35492C34.8223 1.86076 35 2.4208 35 3.03503L35 37.965C35 38.5792 34.8223 39.1392 34.4668 39.6451C34.1113 40.1509 33.6328 40.5213 33.0312 40.7561C32.6849 40.9006 32.2839 40.9729 31.8281 40.9729C30.9531 40.9729 30.1966 40.6839 29.5586 40.1058L17.5 28.616L5.44141 40.1058C4.78516 40.7019 4.02865 41 3.17188 41C2.7526 41 2.35156 40.9187 1.96875 40.7561C1.36719 40.5213 0.888672 40.1509 0.533203 39.6451C0.177734 39.1392 0 38.5792 0 37.965L0 3.03503C0 2.4208 0.177734 1.86076 0.533203 1.35492C0.888672 0.849086 1.36719 0.47874 1.96875 0.243886C2.35156 0.0812954 2.7526 0 3.17188 0L31.8281 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="14.5px"
          left="0px"
          onClick={() => {
            vectorThreeSevenEightFiveThreeZeroZeroFourOnClick();
          }}
          {...getOverrideProps(overrides, "Vector37853004")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          width="64px"
          height="64px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3px"
          left="91px"
          onClick={() => {
            groupThreeTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Group 32")}
        >
          <Icon
            width="64px"
            height="64px"
            viewBox={{ minX: 0, minY: 0, width: 64, height: 64 }}
            paths={[
              {
                d: "M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z",
                fill: "rgba(212,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "SirenBackground")}
          ></Icon>
          <Icon
            width="42px"
            height="42px"
            viewBox={{ minX: 0, minY: 0, width: 42, height: 42 }}
            paths={[
              {
                d: "M39 42L3 42L3 39C3 36.5145 5.0145 34.5 7.5 34.5L34.5 34.5C36.9855 34.5 39 36.5145 39 39L39 42ZM21 6C20.1705 6 19.5 5.328 19.5 4.5L19.5 1.5C19.5 0.672 20.1705 0 21 0C21.8295 0 22.5 0.672 22.5 1.5L22.5 4.5C22.5 5.328 21.8295 6 21 6ZM9.333 10.833C8.949 10.833 8.565 10.686 8.2725 10.3935L6.1515 8.2725C5.565 7.686 5.565 6.738 6.1515 6.1515C6.738 5.565 7.686 5.565 8.2725 6.1515L10.3935 8.2725C10.98 8.859 10.98 9.807 10.3935 10.3935C10.0995 10.686 9.717 10.833 9.333 10.833ZM32.667 10.833C32.283 10.833 31.899 10.686 31.6065 10.3935C31.02 9.807 31.02 8.859 31.6065 8.2725L33.7275 6.1515C34.314 5.565 35.262 5.565 35.8485 6.1515C36.435 6.738 36.435 7.686 35.8485 8.2725L33.7275 10.3935C33.435 10.686 33.051 10.833 32.667 10.833ZM4.5 22.5L1.5 22.5C0.6705 22.5 0 21.828 0 21C0 20.172 0.6705 19.5 1.5 19.5L4.5 19.5C5.3295 19.5 6 20.172 6 21C6 21.828 5.3295 22.5 4.5 22.5ZM40.5 22.5L37.5 22.5C36.6705 22.5 36 21.828 36 21C36 20.172 36.6705 19.5 37.5 19.5L40.5 19.5C41.3295 19.5 42 20.172 42 21C42 21.828 41.3295 22.5 40.5 22.5ZM33 31.5L33 21C33 14.3835 27.6165 9 21 9C14.3835 9 9 14.3835 9 21L9 31.5L33 31.5ZM21.051 14.814C21.258 14.0115 22.077 13.533 22.878 13.737C25.5165 14.4195 27.5805 16.4835 28.263 19.1235C28.4715 19.926 27.9885 20.7435 27.1875 20.952C27.0615 20.985 26.934 21 26.8095 21C26.1435 21 25.533 20.5515 25.359 19.875C24.9495 18.2895 23.709 17.052 22.128 16.6425C21.3255 16.4355 20.844 15.6165 21.051 14.814Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="9.86%"
            bottom="24.52%"
            left="17.19%"
            right="17.19%"
            {...getOverrideProps(overrides, "Vector36753944")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="70px"
          height="70px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="211px"
          onClick={() => {
            groupThreeThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Group 33")}
        >
          <Icon
            width="70px"
            height="70px"
            viewBox={{ minX: 0, minY: 0, width: 70, height: 70 }}
            paths={[
              {
                d: "M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z",
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
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "ProfileBackground")}
          ></Icon>
          <Icon
            width="91.43%"
            height="91.43%"
            viewBox={{ minX: 0, minY: 0, width: 64, height: 64 }}
            paths={[
              {
                d: "M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.29%"
            bottom="4.29%"
            left="4.29%"
            right="4.29%"
            {...getOverrideProps(overrides, "ServiceIcon")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
