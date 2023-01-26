/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchResultIconMobileOverridesProps = {
    SearchResultIconMobile?: PrimitiveOverrideProps<FlexProps>;
    TextGroup?: PrimitiveOverrideProps<FlexProps>;
    "Name of Service and Location36552832"?: PrimitiveOverrideProps<TextProps>;
    "Name of Service and Location36753073"?: PrimitiveOverrideProps<TextProps>;
    "Group 41"?: PrimitiveOverrideProps<FlexProps>;
    PhoneLink?: PrimitiveOverrideProps<ViewProps>;
    WebButton?: PrimitiveOverrideProps<ViewProps>;
    Vector36753374?: PrimitiveOverrideProps<IconProps>;
    WebsiteLink?: PrimitiveOverrideProps<ViewProps>;
    PhoneButton?: PrimitiveOverrideProps<ViewProps>;
    Vector36753369?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchResultIconMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SearchResultIconMobileOverridesProps | undefined | null;
}>;
export default function SearchResultIconMobile(props: SearchResultIconMobileProps): React.ReactElement;
