/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarMobileOverridesProps = {
    NavBarMobile?: PrimitiveOverrideProps<FlexProps>;
    Vector36754104?: PrimitiveOverrideProps<IconProps>;
    Vector36754071?: PrimitiveOverrideProps<IconProps>;
    "Group 32"?: PrimitiveOverrideProps<FlexProps>;
    SirenBackground?: PrimitiveOverrideProps<IconProps>;
    Vector36754197?: PrimitiveOverrideProps<IconProps>;
    Vector36754275?: PrimitiveOverrideProps<IconProps>;
    ProfileIcon?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarMobileOverridesProps | undefined | null;
}>;
export default function NavBarMobile(props: NavBarMobileProps): React.ReactElement;
