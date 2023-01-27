/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Resource } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResourceUpdateFormInputValues = {
    Name?: string;
    Phone?: string;
    Description?: string;
    Website?: string;
    Address?: string;
    SaveStatus?: boolean;
};
export declare type ResourceUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Website?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    SaveStatus?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResourceUpdateFormOverridesProps = {
    ResourceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Website?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    SaveStatus?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ResourceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResourceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    resource?: Resource;
    onSubmit?: (fields: ResourceUpdateFormInputValues) => ResourceUpdateFormInputValues;
    onSuccess?: (fields: ResourceUpdateFormInputValues) => void;
    onError?: (fields: ResourceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResourceUpdateFormInputValues) => ResourceUpdateFormInputValues;
    onValidate?: ResourceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResourceUpdateForm(props: ResourceUpdateFormProps): React.ReactElement;
