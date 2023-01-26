/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HelpIconMobileOverridesProps = {
    HelpIconMobile?: PrimitiveOverrideProps<ViewProps>;
    MainButton?: PrimitiveOverrideProps<ViewProps>;
    ServiceIcon?: PrimitiveOverrideProps<IconProps>;
    "Name of service"?: PrimitiveOverrideProps<TextProps>;
    "Phone#"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HelpIconMobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HelpIconMobileOverridesProps | undefined | null;
}>;
export default function HelpIconMobile(props: HelpIconMobileProps): React.ReactElement;
