/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardmobileOverridesProps = {
    FeaturedCardmobile?: PrimitiveOverrideProps<FlexProps>;
    background?: PrimitiveOverrideProps<ImageProps>;
    Featured_Title?: PrimitiveOverrideProps<TextProps>;
    FeaturedLink?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Learn More"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedCardmobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeaturedCardmobileOverridesProps | undefined | null;
}>;
export default function FeaturedCardmobile(props: FeaturedCardmobileProps): React.ReactElement;
