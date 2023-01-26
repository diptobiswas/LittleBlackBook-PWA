/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardDesktopOverridesProps = {
    FeaturedCardDesktop?: PrimitiveOverrideProps<FlexProps>;
    "Group 40"?: PrimitiveOverrideProps<FlexProps>;
    background37122943?: PrimitiveOverrideProps<ImageProps>;
    "Group 39"?: PrimitiveOverrideProps<ViewProps>;
    background37223116?: PrimitiveOverrideProps<ViewProps>;
    FeaturedLink?: PrimitiveOverrideProps<ViewProps>;
    "Learn More"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Featured_Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedCardDesktopProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeaturedCardDesktopOverridesProps | undefined | null;
}>;
export default function FeaturedCardDesktop(props: FeaturedCardDesktopProps): React.ReactElement;
