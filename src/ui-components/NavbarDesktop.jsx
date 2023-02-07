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
  const { profile, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        logo: {},
        Vector37853004: {},
        SirenBackground: {},
        Vector36753944: {},
        "Group 32": {},
        Vector38552802: {},
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
  const vectorThreeEightFiveFiveTwoEightZeroTwoOnClick = useNavigateAction({
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
        width="262.39px"
        height="64px"
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
          top="11.5px"
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
          top="0px"
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
        <Icon
          width="55.94px"
          height="55.99px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 55.9443359375,
            height: 55.99267578125,
          }}
          paths={[
            {
              d: "M27.9721 0C22.5365 0.0103274 17.2212 1.60112 12.6737 4.5786C8.12616 7.55609 4.54263 11.7918 2.35958 16.7697C0.176538 21.7476 -0.511792 27.253 0.378432 32.6152C1.26866 37.9773 3.69901 42.9649 7.37348 46.9704C9.99783 49.8151 13.183 52.0854 16.7281 53.6382C20.2733 55.191 24.1017 55.9927 27.9721 55.9927C31.8424 55.9927 35.6708 55.191 39.216 53.6382C42.7612 52.0854 45.9463 49.8151 48.5707 46.9704C52.2451 42.9649 54.6755 37.9773 55.5657 32.6152C56.4559 27.253 55.7676 21.7476 53.5846 16.7697C51.4015 11.7918 47.818 7.55609 43.2704 4.5786C38.7229 1.60112 33.4076 0.0103274 27.9721 0ZM27.9721 50.4456C22.1665 50.4367 16.5908 48.1763 12.418 44.1399C13.6849 41.0558 15.84 38.4179 18.6095 36.5615C21.379 34.7051 24.6379 33.7139 27.9721 33.7139C31.3062 33.7139 34.5651 34.7051 37.3346 36.5615C40.1041 38.4179 42.2593 41.0558 43.5261 44.1399C39.3534 48.1763 33.7776 50.4367 27.9721 50.4456ZM22.367 22.4202C22.367 21.3117 22.6957 20.228 23.3116 19.3062C23.9275 18.3845 24.8029 17.6661 25.8271 17.2418C26.8513 16.8176 27.9783 16.7066 29.0656 16.9229C30.1528 17.1392 31.1516 17.673 31.9355 18.4569C32.7193 19.2408 33.2532 20.2395 33.4694 21.3268C33.6857 22.414 33.5747 23.541 33.1505 24.5652C32.7262 25.5894 32.0078 26.4648 31.0861 27.0807C30.1643 27.6966 29.0807 28.0253 27.9721 28.0253C26.4855 28.0253 25.0599 27.4348 24.0087 26.3836C22.9575 25.3325 22.367 23.9068 22.367 22.4202ZM47.3376 39.2354C44.8336 34.9525 40.9797 31.621 36.3797 29.7629C37.8066 28.1449 38.7364 26.1495 39.0574 24.0161C39.3784 21.8828 39.077 19.7021 38.1894 17.7358C37.3018 15.7695 35.8656 14.1011 34.0533 12.9308C32.241 11.7605 30.1294 11.138 27.9721 11.138C25.8147 11.138 23.7032 11.7605 21.8908 12.9308C20.0785 14.1011 18.6424 15.7695 17.7547 17.7358C16.8671 19.7021 16.5657 21.8828 16.8867 24.0161C17.2078 26.1495 18.1375 28.1449 19.5645 29.7629C14.9644 31.621 11.1106 34.9525 8.60659 39.2354C6.61103 35.8362 5.55665 31.967 5.55183 28.0253C5.55183 22.0791 7.91396 16.3764 12.1186 12.1718C16.3232 7.96719 22.0259 5.60506 27.9721 5.60506C33.9183 5.60506 39.621 7.96719 43.8256 12.1718C48.0302 16.3764 50.3923 22.0791 50.3923 28.0253C50.3875 31.967 49.3331 35.8362 47.3376 39.2354Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.75px"
          left="206.44px"
          onClick={() => {
            vectorThreeEightFiveFiveTwoEightZeroTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Vector38552802")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
