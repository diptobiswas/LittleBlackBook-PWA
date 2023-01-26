/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardDesktopOverridesProps = {
    FeaturedCardDesktop?: PrimitiveOverrideProps<ViewProps>;
    background?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FeaturedCardDesktopProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturedCardDesktopOverridesProps | undefined | null;
}>;
export default function FeaturedCardDesktop(props: FeaturedCardDesktopProps): React.ReactElement;
