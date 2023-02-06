/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Resource } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResourceCardOverridesProps = {
    ResourceCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 46"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44"?: PrimitiveOverrideProps<FlexProps>;
    TextGroup?: PrimitiveOverrideProps<FlexProps>;
    "Name of Service and Location37513062"?: PrimitiveOverrideProps<TextProps>;
    "Name of Service and Location37513063"?: PrimitiveOverrideProps<TextProps>;
    "Group 44"?: PrimitiveOverrideProps<FlexProps>;
    WebsiteLink?: PrimitiveOverrideProps<ViewProps>;
    PhoneButton?: PrimitiveOverrideProps<ViewProps>;
    Vector37513067?: PrimitiveOverrideProps<IconProps>;
    PhoneLink?: PrimitiveOverrideProps<ViewProps>;
    WebButton?: PrimitiveOverrideProps<ViewProps>;
    Vector37513070?: PrimitiveOverrideProps<IconProps>;
    "Frame 45"?: PrimitiveOverrideProps<FlexProps>;
    ServiceDetails?: PrimitiveOverrideProps<TextProps>;
    ServiceAddress?: PrimitiveOverrideProps<TextProps>;
    SaveButton?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1171"?: PrimitiveOverrideProps<ViewProps>;
    "Save for offline access"?: PrimitiveOverrideProps<TextProps>;
    collapse?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1170"?: PrimitiveOverrideProps<ViewProps>;
    Vector37513076?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ResourceCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    resource?: Resource;
    variant?: String;
} & {
    variant?: "expanded_saved" | "expanded_unsaved" | "small";
} & {
    overrides?: ResourceCardOverridesProps | undefined | null;
}>;
export default function ResourceCard(props: ResourceCardProps): React.ReactElement;
