/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventPage2MobileOverridesProps = {
    "12"?: PrimitiveOverrideProps<TextProps>;
    EventPage2Mobile?: PrimitiveOverrideProps<ViewProps>;
    featuredimage38592758?: PrimitiveOverrideProps<ImageProps>;
    "Frame 50"?: PrimitiveOverrideProps<FlexProps>;
    "Group 49"?: PrimitiveOverrideProps<FlexProps>;
    featuredimage38592764?: PrimitiveOverrideProps<ViewProps>;
    Sept?: PrimitiveOverrideProps<TextProps>;
    "Frame 51"?: PrimitiveOverrideProps<FlexProps>;
    "7:30-10:30 PM"?: PrimitiveOverrideProps<TextProps>;
    "555 Stone Road"?: PrimitiveOverrideProps<TextProps>;
    "Frame 52"?: PrimitiveOverrideProps<FlexProps>;
    "Larry\u2019s Jazz Guys"?: PrimitiveOverrideProps<TextProps>;
    "Description of the event, what it is about and what you need to know."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EventPage2MobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EventPage2MobileOverridesProps | undefined | null;
}>;
export default function EventPage2Mobile(props: EventPage2MobileProps): React.ReactElement;
