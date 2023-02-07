/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventPage3OverridesProps = {
    "2"?: PrimitiveOverrideProps<TextProps>;
    EventPage3?: PrimitiveOverrideProps<ViewProps>;
    featuredimage38572790?: PrimitiveOverrideProps<ImageProps>;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    Manduppal?: PrimitiveOverrideProps<TextProps>;
    "Frame 51"?: PrimitiveOverrideProps<FlexProps>;
    "7:30-10:30 PM"?: PrimitiveOverrideProps<TextProps>;
    "555 Stone Road"?: PrimitiveOverrideProps<TextProps>;
    "Frame 50"?: PrimitiveOverrideProps<FlexProps>;
    "Group 49"?: PrimitiveOverrideProps<FlexProps>;
    featuredimage38572799?: PrimitiveOverrideProps<ViewProps>;
    Mar?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EventPage3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EventPage3OverridesProps | undefined | null;
}>;
export default function EventPage3(props: EventPage3Props): React.ReactElement;
