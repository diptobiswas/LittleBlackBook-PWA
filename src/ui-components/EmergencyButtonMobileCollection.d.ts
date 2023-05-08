/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EmergencyButtonMobileProps } from "./EmergencyButtonMobile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyButtonMobileCollectionOverridesProps = {
    EmergencyButtonMobileCollection?: PrimitiveOverrideProps<CollectionProps>;
    EmergencyButtonMobile?: EmergencyButtonMobileProps;
} & EscapeHatchProps;
export declare type EmergencyButtonMobileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => EmergencyButtonMobileProps;
} & {
    overrides?: EmergencyButtonMobileCollectionOverridesProps | undefined | null;
}>;
export default function EmergencyButtonMobileCollection(props: EmergencyButtonMobileCollectionProps): React.ReactElement;
