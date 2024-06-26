/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ResourceCardProps } from "./ResourceCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SavedResourceCardCollectionMobileOverridesProps = {
    SavedResourceCardCollectionMobile?: PrimitiveOverrideProps<CollectionProps>;
    ResourceCard?: ResourceCardProps;
} & EscapeHatchProps;
export declare type SavedResourceCardCollectionMobileProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ResourceCardProps;
} & {
    overrides?: SavedResourceCardCollectionMobileOverridesProps | undefined | null;
}>;
export default function SavedResourceCardCollectionMobile(props: SavedResourceCardCollectionMobileProps): React.ReactElement;
