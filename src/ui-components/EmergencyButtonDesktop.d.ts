/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyButtonDesktopOverridesProps = {
    EmergencyButtonDesktop?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Group 37"?: PrimitiveOverrideProps<FlexProps>;
    "Name of service"?: PrimitiveOverrideProps<TextProps>;
    "Phone#"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EmergencyButtonDesktopProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EmergencyButtonDesktopOverridesProps | undefined | null;
}>;
export default function EmergencyButtonDesktop(props: EmergencyButtonDesktopProps): React.ReactElement;
