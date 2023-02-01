/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarDesktopOverridesProps = {
    NavbarDesktop?: PrimitiveOverrideProps<FlexProps>;
    logo?: LogoProps;
    "Group 48"?: PrimitiveOverrideProps<FlexProps>;
    Vector37853004?: PrimitiveOverrideProps<IconProps>;
    "Group 32"?: PrimitiveOverrideProps<ViewProps>;
    SirenBackground?: PrimitiveOverrideProps<IconProps>;
    Vector36753944?: PrimitiveOverrideProps<IconProps>;
    "Group 33"?: PrimitiveOverrideProps<ViewProps>;
    ProfileBackground?: PrimitiveOverrideProps<IconProps>;
    ServiceIcon?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavbarDesktopProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: NavbarDesktopOverridesProps | undefined | null;
}>;
export default function NavbarDesktop(props: NavbarDesktopProps): React.ReactElement;
