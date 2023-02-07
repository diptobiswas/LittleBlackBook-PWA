/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventPage3MobileOverridesProps = {
    "2"?: PrimitiveOverrideProps<TextProps>;
    EventPage3Mobile?: PrimitiveOverrideProps<ViewProps>;
    featuredimage38592771?: PrimitiveOverrideProps<ImageProps>;
    "Frame 50"?: PrimitiveOverrideProps<FlexProps>;
    "Group 49"?: PrimitiveOverrideProps<FlexProps>;
    featuredimage38592777?: PrimitiveOverrideProps<ViewProps>;
    Mar?: PrimitiveOverrideProps<TextProps>;
    "Frame 51"?: PrimitiveOverrideProps<FlexProps>;
    "7:30-10:30 PM"?: PrimitiveOverrideProps<TextProps>;
    "555 Stone Road"?: PrimitiveOverrideProps<TextProps>;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    Manduppal?: PrimitiveOverrideProps<TextProps>;
    "Description of the event, what it is about and what you need to know."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EventPage3MobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EventPage3MobileOverridesProps | undefined | null;
}>;
export default function EventPage3Mobile(props: EventPage3MobileProps): React.ReactElement;
