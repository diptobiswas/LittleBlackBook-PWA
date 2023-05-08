/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeaturedPageMobileNewProps } from "./FeaturedPageMobileNew";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedPageMobileNewCollectionOverridesProps = {
    FeaturedPageMobileNewCollection?: PrimitiveOverrideProps<CollectionProps>;
    FeaturedPageMobileNew?: FeaturedPageMobileNewProps;
} & EscapeHatchProps;
export declare type FeaturedPageMobileNewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FeaturedPageMobileNewProps;
} & {
    overrides?: FeaturedPageMobileNewCollectionOverridesProps | undefined | null;
}>;
export default function FeaturedPageMobileNewCollection(props: FeaturedPageMobileNewCollectionProps): React.ReactElement;
