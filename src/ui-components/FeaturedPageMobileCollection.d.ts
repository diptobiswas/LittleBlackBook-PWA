/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeaturedPageMobileProps } from "./FeaturedPageMobile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedPageMobileCollectionOverridesProps = {
    FeaturedPageMobileCollection?: PrimitiveOverrideProps<CollectionProps>;
    FeaturedPageMobile?: FeaturedPageMobileProps;
} & EscapeHatchProps;
export declare type FeaturedPageMobileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FeaturedPageMobileProps;
} & {
    overrides?: FeaturedPageMobileCollectionOverridesProps | undefined | null;
}>;
export default function FeaturedPageMobileCollection(props: FeaturedPageMobileCollectionProps): React.ReactElement;
