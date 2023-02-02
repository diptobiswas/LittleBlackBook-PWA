/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedPageMobileOverridesProps = {
    FeaturedPageMobile?: PrimitiveOverrideProps<FlexProps>;
    featuredimage?: PrimitiveOverrideProps<ImageProps>;
    "Frame 57"?: PrimitiveOverrideProps<FlexProps>;
    Featured_Title?: PrimitiveOverrideProps<TextProps>;
    "Featured Details"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedPageMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeaturedPageMobileOverridesProps | undefined | null;
}>;
export default function FeaturedPageMobile(props: FeaturedPageMobileProps): React.ReactElement;
