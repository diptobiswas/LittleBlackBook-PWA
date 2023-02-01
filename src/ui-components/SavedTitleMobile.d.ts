/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SavedTitleMobileOverridesProps = {
    SavedTitleMobile?: PrimitiveOverrideProps<FlexProps>;
    "Group 38"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Saved Resources"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SavedTitleMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SavedTitleMobileOverridesProps | undefined | null;
}>;
export default function SavedTitleMobile(props: SavedTitleMobileProps): React.ReactElement;
