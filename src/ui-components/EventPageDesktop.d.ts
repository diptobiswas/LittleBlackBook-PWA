/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventPageDesktopOverridesProps = {
    EventPageDesktop?: PrimitiveOverrideProps<ViewProps>;
    featuredimage37652974?: PrimitiveOverrideProps<ImageProps>;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    "Event Name"?: PrimitiveOverrideProps<TextProps>;
    "Event Description"?: PrimitiveOverrideProps<TextProps>;
    "Frame 51"?: PrimitiveOverrideProps<FlexProps>;
    "Timing Details"?: PrimitiveOverrideProps<TextProps>;
    "Event Address"?: PrimitiveOverrideProps<TextProps>;
    "Frame 50"?: PrimitiveOverrideProps<FlexProps>;
    "Group 49"?: PrimitiveOverrideProps<FlexProps>;
    featuredimage38042732?: PrimitiveOverrideProps<ViewProps>;
    X?: PrimitiveOverrideProps<TextProps>;
    Mon?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EventPageDesktopProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EventPageDesktopOverridesProps | undefined | null;
}>;
export default function EventPageDesktop(props: EventPageDesktopProps): React.ReactElement;
