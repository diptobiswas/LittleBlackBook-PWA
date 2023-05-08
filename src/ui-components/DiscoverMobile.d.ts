/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscoverMobileOverridesProps = {
    DiscoverMobile?: PrimitiveOverrideProps<FlexProps>;
    "Discover resources"?: PrimitiveOverrideProps<TextProps>;
    "Group 28"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    "By Topic"?: PrimitiveOverrideProps<TextProps>;
    "Group 29"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1166"?: PrimitiveOverrideProps<ViewProps>;
    "By Organization"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DiscoverMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DiscoverMobileOverridesProps | undefined | null;
}>;
export default function DiscoverMobile(props: DiscoverMobileProps): React.ReactElement;
