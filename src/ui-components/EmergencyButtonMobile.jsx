/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function EmergencyButtonMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="340px"
      height="84px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EmergencyButtonMobile")}
      {...rest}
    >
      <View
        width="340px"
        height="84px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 0px 15px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "background")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="280.84px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="14.29%"
        bottom="14.29%"
        left="8.87%"
        right="8.53%"
        {...getOverrideProps(overrides, "Group 34")}
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
          width="205px"
          height="38px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="18.33%"
          bottom="18.33%"
          left="27.01%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Service_Name"
          {...getOverrideProps(overrides, "Service_Name")}
        ></Text>
        <Icon
          width="48.82px"
          height="60px"
          viewBox={{ minX: 0, minY: 0, width: 48.82373046875, height: 60 }}
          paths={[
            {
              d: "M14.8323 20.0599L14.8269 20.0626L14.8187 20.0681L14.8323 20.0599ZM41.8319 19.5527C41.6432 19.3707 41.4338 19.2113 41.208 19.078C40.8884 18.8898 40.5335 18.7692 40.1654 18.7236C39.7973 18.678 39.4237 18.7084 39.0678 18.8129C38.7119 18.9173 38.3812 19.0937 38.0962 19.3311C37.8111 19.5684 37.5778 19.8617 37.4106 20.1928C36.4764 22.0344 35.1878 23.6733 33.6186 25.0156C33.8592 23.6635 33.9808 22.293 33.9821 20.9198C33.9873 16.743 32.8855 12.6394 30.7891 9.02691C28.6927 5.41437 25.6764 2.42187 22.0474 0.354099C21.6475 0.126875 21.1963 0.00507733 20.7364 0.000155343C20.2765 -0.00476664 19.8229 0.107349 19.4182 0.325963C19.0135 0.544576 18.6711 0.862508 18.4231 1.24987C18.175 1.63723 18.0296 2.08129 18.0004 2.54032C17.8486 5.11198 17.1762 7.62604 16.0241 9.93021C14.8721 12.2344 13.2642 14.2807 11.298 15.9452L10.6741 16.4524C8.61707 17.8364 6.79631 19.5427 5.28182 21.5057C2.92817 24.4707 1.29777 27.9433 0.519915 31.6481C-0.257938 35.353 -0.16184 39.1881 0.800588 42.8493C1.76302 46.5105 3.5653 49.8972 6.06449 52.7406C8.56368 55.5839 11.691 57.8059 15.1985 59.2302C15.6103 59.3978 16.057 59.4616 16.4992 59.416C16.9415 59.3704 17.3658 59.2168 17.7347 58.9687C18.1036 58.7206 18.4059 58.3856 18.615 57.9932C18.824 57.6008 18.9334 57.1631 18.9335 56.7185C18.9312 56.4312 18.8855 56.1458 18.7979 55.8722C18.191 53.5912 18.0162 51.2167 18.2825 48.8714C20.8498 53.7119 24.9702 57.5486 29.9813 59.7645C30.5927 60.0379 31.2837 60.0746 31.9206 59.8676C35.8794 58.5897 39.4456 56.3207 42.2805 53.2764C45.1155 50.2321 47.125 46.5135 48.1181 42.4739C49.1112 38.4343 49.055 34.2079 47.9547 30.1961C46.8545 26.1843 44.7468 22.5205 41.8319 19.5527ZM31.2398 54.356C28.8754 53.1579 26.7895 51.4756 25.1179 49.4184C23.4463 47.3613 22.2264 44.9754 21.5374 42.4158C21.3268 41.5538 21.1638 40.6809 21.0492 39.801C20.972 39.2407 20.7216 38.7186 20.333 38.3076C19.9444 37.8966 19.4371 37.6174 18.882 37.509C18.7113 37.4759 18.5378 37.4595 18.3639 37.4602C17.8873 37.4597 17.419 37.5848 17.0062 37.8229C16.5933 38.061 16.2505 38.4037 16.0122 38.8164C13.7621 42.6986 12.6308 47.128 12.7437 51.6137C10.7641 50.0749 9.10954 48.1585 7.87604 45.9756C6.64253 43.7926 5.85458 41.3866 5.55787 38.8968C5.26116 36.4071 5.46159 33.8832 6.14754 31.4715C6.83349 29.0598 7.99132 26.8083 9.5539 24.8474C10.7404 23.3063 12.1717 21.9703 13.7907 20.8927C13.8616 20.8472 13.9295 20.7974 13.9942 20.7435C13.9942 20.7435 14.797 20.0789 14.8242 20.0654C18.6899 16.797 21.4397 12.404 22.6902 7.49865C25.6452 10.2311 27.6154 13.8627 28.2947 17.8297C28.974 21.7966 28.3244 25.8769 26.4469 29.4368C26.1985 29.912 26.0964 30.4501 26.1537 30.9833C26.2109 31.5164 26.4249 32.0206 26.7685 32.4322C27.1122 32.8438 27.5701 33.1443 28.0845 33.2957C28.5989 33.4472 29.1466 33.4428 29.6585 33.2831C33.8132 31.9801 37.469 29.4356 40.1339 25.992C41.7361 28.3579 42.7837 31.0549 43.1986 33.882C43.6135 36.7091 43.3849 39.5933 42.53 42.3198C41.675 45.0462 40.2158 47.5446 38.2609 49.6286C36.3061 51.7126 33.9061 53.3285 31.2398 54.356Z",
              fill: "rgba(0,0,0,1)",
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
          right="82.62%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
