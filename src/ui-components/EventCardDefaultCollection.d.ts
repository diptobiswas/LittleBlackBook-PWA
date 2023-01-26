/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EventCardDefaultProps } from "./EventCardDefault";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventCardDefaultCollectionOverridesProps = {
    EventCardDefaultCollection?: PrimitiveOverrideProps<CollectionProps>;
    EventCardDefault?: EventCardDefaultProps;
} & EscapeHatchProps;
export declare type EventCardDefaultCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => EventCardDefaultProps;
} & {
    overrides?: EventCardDefaultCollectionOverridesProps | undefined | null;
}>;
export default function EventCardDefaultCollection(props: EventCardDefaultCollectionProps): React.ReactElement;
