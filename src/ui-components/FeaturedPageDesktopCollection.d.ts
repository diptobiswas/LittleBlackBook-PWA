/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeaturedPageDesktopProps } from "./FeaturedPageDesktop";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedPageDesktopCollectionOverridesProps = {
    FeaturedPageDesktopCollection?: PrimitiveOverrideProps<CollectionProps>;
    FeaturedPageDesktop?: FeaturedPageDesktopProps;
} & EscapeHatchProps;
export declare type FeaturedPageDesktopCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FeaturedPageDesktopProps;
} & {
    overrides?: FeaturedPageDesktopCollectionOverridesProps | undefined | null;
}>;
export default function FeaturedPageDesktopCollection(props: FeaturedPageDesktopCollectionProps): React.ReactElement;
