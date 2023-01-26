/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyButtonMobileOverridesProps = {
    EmergencyButtonMobile?: PrimitiveOverrideProps<ViewProps>;
    background?: PrimitiveOverrideProps<ViewProps>;
    "Group 34"?: PrimitiveOverrideProps<ViewProps>;
    Service_Name?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EmergencyButtonMobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EmergencyButtonMobileOverridesProps | undefined | null;
}>;
export default function EmergencyButtonMobile(props: EmergencyButtonMobileProps): React.ReactElement;
