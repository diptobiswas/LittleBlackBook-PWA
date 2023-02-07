/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyTitleDesktopOverridesProps = {
    EmergencyTitleDesktop?: PrimitiveOverrideProps<FlexProps>;
    "Frame 35"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "24/7 Emergency & Crisis Helplines"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EmergencyTitleDesktopProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EmergencyTitleDesktopOverridesProps | undefined | null;
}>;
export default function EmergencyTitleDesktop(props: EmergencyTitleDesktopProps): React.ReactElement;
