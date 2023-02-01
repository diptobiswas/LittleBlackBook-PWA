/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Organization } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationButtonOverridesProps = {
    OrganizationButton?: PrimitiveOverrideProps<FlexProps>;
    Organization_Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OrganizationButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    organization?: Organization;
} & {
    overrides?: OrganizationButtonOverridesProps | undefined | null;
}>;
export default function OrganizationButton(props: OrganizationButtonProps): React.ReactElement;
