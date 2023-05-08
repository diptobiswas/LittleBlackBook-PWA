/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EventCardExpandedProps } from "./EventCardExpanded";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventCardExpandedCollectionOverridesProps = {
    EventCardExpandedCollection?: PrimitiveOverrideProps<CollectionProps>;
    EventCardExpanded?: EventCardExpandedProps;
} & EscapeHatchProps;
export declare type EventCardExpandedCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => EventCardExpandedProps;
} & {
    overrides?: EventCardExpandedCollectionOverridesProps | undefined | null;
}>;
export default function EventCardExpandedCollection(props: EventCardExpandedCollectionProps): React.ReactElement;
