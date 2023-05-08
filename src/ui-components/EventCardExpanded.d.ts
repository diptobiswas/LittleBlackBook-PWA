/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Events } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventCardExpandedOverridesProps = {
    EventCardExpanded?: PrimitiveOverrideProps<FlexProps>;
    "Group 47"?: PrimitiveOverrideProps<FlexProps>;
    eventImage?: PrimitiveOverrideProps<ImageProps>;
    infoCard?: PrimitiveOverrideProps<ViewProps>;
    "Frame 4937853080"?: PrimitiveOverrideProps<FlexProps>;
    EventName?: PrimitiveOverrideProps<TextProps>;
    EventAddress?: PrimitiveOverrideProps<TextProps>;
    EventDescription?: PrimitiveOverrideProps<TextProps>;
    "Frame 4937853105"?: PrimitiveOverrideProps<FlexProps>;
    Day?: PrimitiveOverrideProps<TextProps>;
    Month?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EventCardExpandedProps = React.PropsWithChildren<Partial<FlexProps> & {
    events?: Events;
} & {
    overrides?: EventCardExpandedOverridesProps | undefined | null;
}>;
export default function EventCardExpanded(props: EventCardExpandedProps): React.ReactElement;
