/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SavedTitleDesktopOverridesProps = {
    SavedTitleDesktop?: PrimitiveOverrideProps<FlexProps>;
    "Group 35"?: PrimitiveOverrideProps<FlexProps>;
    "Saved Resources"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SavedTitleDesktopProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SavedTitleDesktopOverridesProps | undefined | null;
}>;
export default function SavedTitleDesktop(props: SavedTitleDesktopProps): React.ReactElement;
