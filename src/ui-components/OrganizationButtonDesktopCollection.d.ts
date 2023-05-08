/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OrganizationButtonProps } from "./OrganizationButton";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationButtonDesktopCollectionOverridesProps = {
    OrganizationButtonDesktopCollection?: PrimitiveOverrideProps<CollectionProps>;
    OrganizationButton?: OrganizationButtonProps;
} & EscapeHatchProps;
export declare type OrganizationButtonDesktopCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => OrganizationButtonProps;
} & {
    overrides?: OrganizationButtonDesktopCollectionOverridesProps | undefined | null;
}>;
export default function OrganizationButtonDesktopCollection(props: OrganizationButtonDesktopCollectionProps): React.ReactElement;
