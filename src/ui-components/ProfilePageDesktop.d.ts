/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfilePageDesktopOverridesProps = {
    ProfilePageDesktop?: PrimitiveOverrideProps<ViewProps>;
    ProfileIcon?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Group 50"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 52"?: PrimitiveOverrideProps<FlexProps>;
    Settings?: PrimitiveOverrideProps<TextProps>;
    "Frame 53"?: PrimitiveOverrideProps<FlexProps>;
    "Contact Us"?: PrimitiveOverrideProps<TextProps>;
    "Frame 54"?: PrimitiveOverrideProps<FlexProps>;
    "About Us"?: PrimitiveOverrideProps<TextProps>;
    "Frame 55"?: PrimitiveOverrideProps<FlexProps>;
    Language?: PrimitiveOverrideProps<TextProps>;
    "Frame 56"?: PrimitiveOverrideProps<FlexProps>;
    Logout?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfilePageDesktopProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfilePageDesktopOverridesProps | undefined | null;
}>;
export default function ProfilePageDesktop(props: ProfilePageDesktopProps): React.ReactElement;
