/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Emergency } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyButtonMobileOverridesProps = {
    EmergencyButtonMobile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 34"?: PrimitiveOverrideProps<FlexProps>;
    fire?: PrimitiveOverrideProps<ImageProps>;
    Service_Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EmergencyButtonMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    emergency?: Emergency;
} & {
    overrides?: EmergencyButtonMobileOverridesProps | undefined | null;
}>;
export default function EmergencyButtonMobile(props: EmergencyButtonMobileProps): React.ReactElement;
