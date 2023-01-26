/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardmobileOverridesProps = {
    FeaturedCardmobile?: PrimitiveOverrideProps<ViewProps>;
    background?: PrimitiveOverrideProps<ImageProps>;
    Featured_Title?: PrimitiveOverrideProps<TextProps>;
    FeaturedLink?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Learn More"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedCardmobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturedCardmobileOverridesProps | undefined | null;
}>;
export default function FeaturedCardmobile(props: FeaturedCardmobileProps): React.ReactElement;
