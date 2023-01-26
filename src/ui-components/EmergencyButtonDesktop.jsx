/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function EmergencyButtonDesktop(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="500px"
      height="160px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EmergencyButtonDesktop")}
      {...rest}
    >
      <View
        width="500px"
        height="160px"
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
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainButton")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="28px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.13px"
        width="229px"
        height="20px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26.88%"
        bottom="60.62%"
        left="35.6%"
        right="18.6%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Name of service"
        {...getOverrideProps(overrides, "Name of service")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="42px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="42px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.27px"
        width="291px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="50.63%"
        bottom="25%"
        left="35.6%"
        right="6.2%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="905-111-1111"
        {...getOverrideProps(overrides, "Phone#")}
      ></Text>
      <Icon
        width="81.37px"
        height="100px"
        viewBox={{ minX: 0, minY: 0, width: 81.37255859375, height: 100 }}
        paths={[
          {
            d: "M24.7205 33.4332L24.7115 33.4377L24.6979 33.4468L24.7205 33.4332ZM69.7198 32.5878C69.4053 32.2844 69.0563 32.0189 68.68 31.7967C68.1473 31.4831 67.5559 31.282 66.9424 31.206C66.3288 31.13 65.7062 31.1806 65.113 31.3548C64.5199 31.5289 63.9687 31.8229 63.4936 32.2185C63.0186 32.6141 62.6297 33.1029 62.351 33.6547C60.794 36.724 58.6463 39.4555 56.031 41.6926C56.432 39.4392 56.6347 37.155 56.6368 34.8663C56.6454 27.905 54.8092 21.0657 51.3152 15.0448C47.8211 9.02395 42.794 4.03646 36.7456 0.590166C36.0791 0.211459 35.3272 0.00846221 34.5607 0.000258904C33.7942 -0.0079444 33.0381 0.178915 32.3636 0.543271C31.6892 0.907627 31.1184 1.43751 30.7051 2.08311C30.2917 2.72871 30.0493 3.46882 30.0007 4.23387C29.7476 8.51996 28.627 12.7101 26.7069 16.5503C24.7868 20.3906 22.107 23.8011 18.83 26.5753L17.7902 27.4207C14.3618 29.7273 11.3272 32.5711 8.80303 35.8428C4.88029 40.7844 2.16295 46.5721 0.866525 52.7469C-0.429897 58.9216 -0.269733 65.3135 1.33431 71.4155C2.93836 77.5176 5.94216 83.1619 10.1075 87.9009C14.2728 92.6399 19.485 96.3432 25.3308 98.717C26.0171 98.9964 26.7616 99.1027 27.4987 99.0267C28.2358 98.9507 28.9429 98.6947 29.5578 98.2812C30.1727 97.8677 30.6766 97.3094 31.025 96.6554C31.3734 96.0014 31.5557 95.2718 31.5558 94.5308C31.5521 94.0519 31.4759 93.5764 31.3298 93.1203C30.3183 89.3186 30.027 85.3612 30.4709 81.4523C34.7496 89.5199 41.6169 95.9143 49.9688 99.6076C50.9878 100.063 52.1395 100.124 53.2011 99.7794C59.7989 97.6494 65.7427 93.8679 70.4676 88.7941C75.1925 83.7202 78.5416 77.5225 80.1968 70.7898C81.852 64.0572 81.7583 57.0131 79.9246 50.3268C78.0908 43.6406 74.578 37.5342 69.7198 32.5878ZM52.0664 90.5932C48.1256 88.5965 44.6492 85.7926 41.8632 82.3641C39.0772 78.9355 37.044 74.959 35.8957 70.693C35.5447 69.2564 35.273 67.8015 35.082 66.335C34.9534 65.4012 34.536 64.5309 33.8884 63.846C33.2407 63.161 32.3951 62.6957 31.4699 62.515C31.1855 62.4598 30.8963 62.4325 30.6065 62.4337C29.8122 62.4329 29.0317 62.6414 28.3436 63.0382C27.6555 63.435 27.0842 64.0061 26.687 64.694C22.9368 71.1643 21.0514 78.5466 21.2395 86.0228C17.9401 83.4582 15.1826 80.2642 13.1267 76.626C11.0709 72.9877 9.75764 68.9776 9.26312 64.828C8.76861 60.6785 9.10266 56.472 10.2459 52.4525C11.3892 48.4331 13.3189 44.6805 15.9232 41.4123C17.9006 38.8438 20.2861 36.6172 22.9845 34.8211C23.1026 34.7453 23.2159 34.6623 23.3236 34.5724C23.3236 34.5724 24.6617 33.4649 24.7069 33.4423C31.1499 27.995 35.7328 20.6733 37.817 12.4978C42.7421 17.0518 46.0256 23.1045 47.1578 29.7161C48.2899 36.3277 47.2074 43.1281 44.0782 49.0614C43.6641 49.8533 43.494 50.7502 43.5894 51.6388C43.6848 52.5273 44.0414 53.3677 44.6142 54.0537C45.187 54.7396 45.9502 55.2405 46.8075 55.4929C47.6648 55.7453 48.5777 55.7379 49.4308 55.4717C56.3553 53.3001 62.4484 49.0593 66.8898 43.32C69.5602 47.2632 71.3062 51.7582 71.9976 56.47C72.6891 61.1818 72.3082 65.9889 70.8833 70.533C69.4584 75.0771 67.0263 79.241 63.7682 82.7143C60.5101 86.1877 56.5101 88.8809 52.0664 90.5932Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18.75%"
        bottom="18.75%"
        left="10.56%"
        right="73.16%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </View>
  );
}
