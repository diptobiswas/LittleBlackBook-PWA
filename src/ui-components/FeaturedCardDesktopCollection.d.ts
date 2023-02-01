/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeaturedCardDesktopProps } from "./FeaturedCardDesktop";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardDesktopCollectionOverridesProps = {
    FeaturedCardDesktopCollection?: PrimitiveOverrideProps<CollectionProps>;
    FeaturedCardDesktop?: FeaturedCardDesktopProps;
} & EscapeHatchProps;
export declare type FeaturedCardDesktopCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FeaturedCardDesktopProps;
} & {
    overrides?: FeaturedCardDesktopCollectionOverridesProps | undefined | null;
}>;
export default function FeaturedCardDesktopCollection(props: FeaturedCardDesktopCollectionProps): React.ReactElement;
