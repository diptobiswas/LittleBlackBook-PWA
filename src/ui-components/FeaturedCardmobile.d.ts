/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FeaturedContent } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardMobileOverridesProps = {
    FeaturedCardMobile?: PrimitiveOverrideProps<FlexProps>;
    featured_image?: PrimitiveOverrideProps<ImageProps>;
    "Group 45"?: PrimitiveOverrideProps<FlexProps>;
    FeaturedLink?: PrimitiveOverrideProps<ViewProps>;
    "Learn More"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Featured_Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedCardMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    featuredContent?: FeaturedContent;
} & {
    overrides?: FeaturedCardMobileOverridesProps | undefined | null;
}>;
export default function FeaturedCardMobile(props: FeaturedCardMobileProps): React.ReactElement;
