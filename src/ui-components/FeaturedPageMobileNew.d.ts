/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FeaturedContent } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedPageMobileNewOverridesProps = {
    FeaturedPageMobileNew?: PrimitiveOverrideProps<FlexProps>;
    featuredimage?: PrimitiveOverrideProps<ImageProps>;
    "Frame 57"?: PrimitiveOverrideProps<FlexProps>;
    Featured_Title?: PrimitiveOverrideProps<TextProps>;
    "Featured Details"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedPageMobileNewProps = React.PropsWithChildren<Partial<FlexProps> & {
    featuredContent?: FeaturedContent;
} & {
    overrides?: FeaturedPageMobileNewOverridesProps | undefined | null;
}>;
export default function FeaturedPageMobileNew(props: FeaturedPageMobileNewProps): React.ReactElement;
