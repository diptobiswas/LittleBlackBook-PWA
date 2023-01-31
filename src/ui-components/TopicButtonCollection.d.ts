/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TopicButtonProps } from "./TopicButton";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicButtonCollectionOverridesProps = {
    TopicButtonCollection?: PrimitiveOverrideProps<CollectionProps>;
    TopicButton?: TopicButtonProps;
} & EscapeHatchProps;
export declare type TopicButtonCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TopicButtonProps;
} & {
    overrides?: TopicButtonCollectionOverridesProps | undefined | null;
}>;
export default function TopicButtonCollection(props: TopicButtonCollectionProps): React.ReactElement;
