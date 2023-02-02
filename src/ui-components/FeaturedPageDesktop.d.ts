/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedPageDesktopOverridesProps = {
    FeaturedPageDesktop?: PrimitiveOverrideProps<FlexProps>;
    featuredimage?: PrimitiveOverrideProps<ImageProps>;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    Featured_Title?: PrimitiveOverrideProps<TextProps>;
    "Featured Details"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedPageDesktopProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeaturedPageDesktopOverridesProps | undefined | null;
}>;
export default function FeaturedPageDesktop(props: FeaturedPageDesktopProps): React.ReactElement;
