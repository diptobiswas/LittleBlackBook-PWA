/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeaturedCardMobileProps } from "./FeaturedCardMobile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardMobileCollectionOverridesProps = {
    FeaturedCardMobileCollection?: PrimitiveOverrideProps<CollectionProps>;
    FeaturedCardMobile?: FeaturedCardMobileProps;
} & EscapeHatchProps;
export declare type FeaturedCardMobileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FeaturedCardMobileProps;
} & {
    overrides?: FeaturedCardMobileCollectionOverridesProps | undefined | null;
}>;
export default function FeaturedCardMobileCollection(props: FeaturedCardMobileCollectionProps): React.ReactElement;
