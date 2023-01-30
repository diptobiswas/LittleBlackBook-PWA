/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Topic } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicButtonOverridesProps = {
    TopicButton?: PrimitiveOverrideProps<FlexProps>;
    "Frame 34"?: PrimitiveOverrideProps<FlexProps>;
    Brain?: PrimitiveOverrideProps<ImageProps>;
    Topic_Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopicButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    topic?: Topic;
} & {
    overrides?: TopicButtonOverridesProps | undefined | null;
}>;
export default function TopicButton(props: TopicButtonProps): React.ReactElement;
