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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavbarDesktop(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        logo: {},
        SearchBar: {},
        Vector36754019: {},
        "Placeholder for Search": {},
        "Group 30": {},
        SirenBackground: {},
        Vector36753944: {},
        "Group 32": {},
        ProfileBackground: {},
        ServiceIcon: {},
        "Group 33": {},
        NavbarDesktop: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        logo: {},
        SearchBar: { width: "665px" },
        Vector36754019: { top: "10.5px", left: "619px" },
        "Placeholder for Search": { top: "16.5px" },
        "Group 30": { width: "665px" },
        SirenBackground: {
          width: "50px",
          height: "50px",
          viewBox: { minX: 0, minY: 0, width: 50, height: 50 },
          paths: [
            {
              d: "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z",
              fill: "rgba(212,0,0,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Vector36753944: {
          width: "32.81px",
          height: "32.81px",
          viewBox: { minX: 0, minY: 0, width: 32.8125, height: 32.8125 },
          paths: [
            {
              d: "M30.4688 32.8125L2.34375 32.8125L2.34375 30.4688C2.34375 28.527 3.91758 26.9531 5.85938 26.9531L26.9531 26.9531C28.8949 26.9531 30.4688 28.527 30.4688 30.4688L30.4688 32.8125ZM16.4062 4.6875C15.7582 4.6875 15.2344 4.1625 15.2344 3.51562L15.2344 1.17188C15.2344 0.525 15.7582 0 16.4062 0C17.0543 0 17.5781 0.525 17.5781 1.17188L17.5781 3.51562C17.5781 4.1625 17.0543 4.6875 16.4062 4.6875ZM7.29141 8.46328C6.99141 8.46328 6.69141 8.34844 6.46289 8.11992L4.80586 6.46289C4.34766 6.00469 4.34766 5.26406 4.80586 4.80586C5.26406 4.34766 6.00469 4.34766 6.46289 4.80586L8.11992 6.46289C8.57812 6.92109 8.57812 7.66172 8.11992 8.11992C7.89023 8.34844 7.59141 8.46328 7.29141 8.46328ZM25.5211 8.46328C25.2211 8.46328 24.9211 8.34844 24.6926 8.11992C24.2344 7.66172 24.2344 6.92109 24.6926 6.46289L26.3496 4.80586C26.8078 4.34766 27.5484 4.34766 28.0066 4.80586C28.4648 5.26406 28.4648 6.00469 28.0066 6.46289L26.3496 8.11992C26.1211 8.34844 25.8211 8.46328 25.5211 8.46328ZM3.51562 17.5781L1.17188 17.5781C0.523828 17.5781 0 17.0531 0 16.4062C0 15.7594 0.523828 15.2344 1.17188 15.2344L3.51562 15.2344C4.16367 15.2344 4.6875 15.7594 4.6875 16.4062C4.6875 17.0531 4.16367 17.5781 3.51562 17.5781ZM31.6406 17.5781L29.2969 17.5781C28.6488 17.5781 28.125 17.0531 28.125 16.4062C28.125 15.7594 28.6488 15.2344 29.2969 15.2344L31.6406 15.2344C32.2887 15.2344 32.8125 15.7594 32.8125 16.4062C32.8125 17.0531 32.2887 17.5781 31.6406 17.5781ZM25.7812 24.6094L25.7812 16.4062C25.7812 11.2371 21.5754 7.03125 16.4062 7.03125C11.2371 7.03125 7.03125 11.2371 7.03125 16.4062L7.03125 24.6094L25.7812 24.6094ZM16.4461 11.5734C16.6078 10.9465 17.2477 10.5727 17.8734 10.732C19.9348 11.2652 21.5473 12.8777 22.0805 14.9402C22.2434 15.5672 21.866 16.2059 21.2402 16.3687C21.1418 16.3945 21.0422 16.4062 20.9449 16.4062C20.4246 16.4062 19.9477 16.0559 19.8117 15.5273C19.4918 14.2887 18.5227 13.3219 17.2875 13.002C16.6605 12.8402 16.2844 12.2004 16.4461 11.5734Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ],
        },
        "Group 32": { width: "50px", height: "50px" },
        ProfileBackground: {
          width: "50px",
          height: "50px",
          viewBox: { minX: 0, minY: 0, width: 50, height: 50 },
          paths: [
            {
              d: "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ],
        },
        ServiceIcon: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 45.71435546875,
            height: 45.71435546875,
          },
          paths: [
            {
              d: "M45.7143 22.8571C45.7143 35.4808 35.4808 45.7143 22.8571 45.7143C10.2335 45.7143 0 35.4808 0 22.8571C0 10.2335 10.2335 0 22.8571 0C35.4808 0 45.7143 10.2335 45.7143 22.8571Z",
              fillRule: "nonzero",
            },
          ],
        },
        "Group 33": { width: "50px", height: "50px" },
        NavbarDesktop: {},
      },
      variantValues: { property1: "medium" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
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
      width="unset"
      height="95px"
      justifyContent="center"
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
        width="716.52px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 30")}
      >
        <View
          width="716.52px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "SearchBar")}
        ></View>
        <Icon
          width="27.42px"
          height="27.42px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 27.4150390625,
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
          position="absolute"
          top="11.29px"
          left="665px"
          {...getOverrideProps(overrides, "Vector36754019")}
        ></Icon>
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
          width="629px"
          height="16px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="17px"
          left="17px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Placeholder for Search"
          {...getOverrideProps(overrides, "Placeholder for Search")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="64px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
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
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="70px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
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
      </Flex>
    </Flex>
  );
}
