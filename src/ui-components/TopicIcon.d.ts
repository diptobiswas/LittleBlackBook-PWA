/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Resource, Topic } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicIconOverridesProps = {
    TopicIcon?: PrimitiveOverrideProps<FlexProps>;
    icon?: PrimitiveOverrideProps<FlexProps>;
    background?: PrimitiveOverrideProps<ViewProps>;
    Brain?: PrimitiveOverrideProps<ImageProps>;
    Topic_Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopicIconProps = React.PropsWithChildren<Partial<FlexProps> & {
    resource?: Resource;
    topic?: Topic;
} & {
    overrides?: TopicIconOverridesProps | undefined | null;
}>;
export default function TopicIcon(props: TopicIconProps): React.ReactElement;
