/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchBarMobileOverridesProps = {
    SearchBarMobile?: PrimitiveOverrideProps<ViewProps>;
    SearchBar?: PrimitiveOverrideProps<ViewProps>;
    "Placeholder for Search"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchBarMobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchBarMobileOverridesProps | undefined | null;
}>;
export default function SearchBarMobile(props: SearchBarMobileProps): React.ReactElement;
