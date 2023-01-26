/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { LogoProps } from "./Logo";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopbarMobileOverridesProps = {
    TopbarMobile?: PrimitiveOverrideProps<FlexProps>;
    "Group 36"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1167"?: PrimitiveOverrideProps<ViewProps>;
    logo?: LogoProps;
} & EscapeHatchProps;
export declare type TopbarMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TopbarMobileOverridesProps | undefined | null;
}>;
export default function TopbarMobile(props: TopbarMobileProps): React.ReactElement;
