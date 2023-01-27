/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResourceCreateFormInputValues = {
    Name?: string;
    Phone?: string;
    Description?: string;
    Website?: string;
    Address?: string;
    SaveStatus?: boolean;
};
export declare type ResourceCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Website?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    SaveStatus?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResourceCreateFormOverridesProps = {
    ResourceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Website?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    SaveStatus?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ResourceCreateFormProps = React.PropsWithChildren<{
    overrides?: ResourceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResourceCreateFormInputValues) => ResourceCreateFormInputValues;
    onSuccess?: (fields: ResourceCreateFormInputValues) => void;
    onError?: (fields: ResourceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResourceCreateFormInputValues) => ResourceCreateFormInputValues;
    onValidate?: ResourceCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResourceCreateForm(props: ResourceCreateFormProps): React.ReactElement;
