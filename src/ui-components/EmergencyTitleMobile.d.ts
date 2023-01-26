/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyTitleMobileOverridesProps = {
    EmergencyTitleMobile?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1169"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "24/7 Emergency & Crisis Helplines"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EmergencyTitleMobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EmergencyTitleMobileOverridesProps | undefined | null;
}>;
export default function EmergencyTitleMobile(props: EmergencyTitleMobileProps): React.ReactElement;
