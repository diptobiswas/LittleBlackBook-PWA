/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Events } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventCardDefaultOverridesProps = {
    EventCardDefault?: PrimitiveOverrideProps<FlexProps>;
    "Frame 45"?: PrimitiveOverrideProps<FlexProps>;
    day?: PrimitiveOverrideProps<TextProps>;
    mon?: PrimitiveOverrideProps<TextProps>;
    "Frame 44"?: PrimitiveOverrideProps<FlexProps>;
    EventName?: PrimitiveOverrideProps<TextProps>;
    EventAddress?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EventCardDefaultProps = React.PropsWithChildren<Partial<FlexProps> & {
    events?: Events;
} & {
    overrides?: EventCardDefaultOverridesProps | undefined | null;
}>;
export default function EventCardDefault(props: EventCardDefaultProps): React.ReactElement;
