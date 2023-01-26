/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchResultIconMobileExpandedSavedOverridesProps = {
    SearchResultIconMobileExpandedSaved?: PrimitiveOverrideProps<ViewProps>;
    MainIcon?: PrimitiveOverrideProps<ViewProps>;
    collapse?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1170"?: PrimitiveOverrideProps<ViewProps>;
    Vector36753706?: PrimitiveOverrideProps<IconProps>;
    TextGroup?: PrimitiveOverrideProps<ViewProps>;
    "Name of Service and Location36753708"?: PrimitiveOverrideProps<TextProps>;
    "Name of Service and Location36753709"?: PrimitiveOverrideProps<TextProps>;
    ServiceDetails?: PrimitiveOverrideProps<TextProps>;
    ServiceAddress?: PrimitiveOverrideProps<TextProps>;
    PhoneLink?: PrimitiveOverrideProps<ViewProps>;
    WebButton?: PrimitiveOverrideProps<ViewProps>;
    Vector36753714?: PrimitiveOverrideProps<IconProps>;
    WebsiteLink?: PrimitiveOverrideProps<ViewProps>;
    PhoneButton?: PrimitiveOverrideProps<ViewProps>;
    Vector36753717?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchResultIconMobileExpandedSavedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchResultIconMobileExpandedSavedOverridesProps | undefined | null;
}>;
export default function SearchResultIconMobileExpandedSaved(props: SearchResultIconMobileExpandedSavedProps): React.ReactElement;
