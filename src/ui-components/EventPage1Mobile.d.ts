/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventPage1MobileOverridesProps = {
    "20"?: PrimitiveOverrideProps<TextProps>;
    EventPage1Mobile?: PrimitiveOverrideProps<ViewProps>;
    featuredimage38592745?: PrimitiveOverrideProps<ImageProps>;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    "Sarnia Sting at Kitchener Rangers"?: PrimitiveOverrideProps<TextProps>;
    "Description of the event, what it is about and what you need to know."?: PrimitiveOverrideProps<TextProps>;
    "Frame 50"?: PrimitiveOverrideProps<FlexProps>;
    "Group 49"?: PrimitiveOverrideProps<FlexProps>;
    featuredimage38592751?: PrimitiveOverrideProps<ViewProps>;
    Feb?: PrimitiveOverrideProps<TextProps>;
    "Frame 51"?: PrimitiveOverrideProps<FlexProps>;
    "7:30-10:30 PM"?: PrimitiveOverrideProps<TextProps>;
    "555 Stone Road"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EventPage1MobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EventPage1MobileOverridesProps | undefined | null;
}>;
export default function EventPage1Mobile(props: EventPage1MobileProps): React.ReactElement;
