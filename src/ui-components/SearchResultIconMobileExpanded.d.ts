/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchResultIconMobileExpandedOverridesProps = {
    SearchResultIconMobileExpanded?: PrimitiveOverrideProps<ViewProps>;
    MainIcon?: PrimitiveOverrideProps<ViewProps>;
    collapse?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1170"?: PrimitiveOverrideProps<ViewProps>;
    Vector36753721?: PrimitiveOverrideProps<IconProps>;
    TextGroup?: PrimitiveOverrideProps<ViewProps>;
    "Name of Service and Location36753723"?: PrimitiveOverrideProps<TextProps>;
    "Name of Service and Location36753724"?: PrimitiveOverrideProps<TextProps>;
    ServiceDetails?: PrimitiveOverrideProps<TextProps>;
    ServiceAddress?: PrimitiveOverrideProps<TextProps>;
    PhoneLink?: PrimitiveOverrideProps<ViewProps>;
    WebButton?: PrimitiveOverrideProps<ViewProps>;
    Vector36753729?: PrimitiveOverrideProps<IconProps>;
    WebsiteLink?: PrimitiveOverrideProps<ViewProps>;
    PhoneButton?: PrimitiveOverrideProps<ViewProps>;
    Vector36753732?: PrimitiveOverrideProps<IconProps>;
    SaveButton?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1171"?: PrimitiveOverrideProps<ViewProps>;
    "Save for offline access"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SearchResultIconMobileExpandedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchResultIconMobileExpandedOverridesProps | undefined | null;
}>;
export default function SearchResultIconMobileExpanded(props: SearchResultIconMobileExpandedProps): React.ReactElement;
