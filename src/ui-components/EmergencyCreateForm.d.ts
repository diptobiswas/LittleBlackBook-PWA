/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmergencyCreateFormInputValues = {
    Name?: string;
    Phone?: string;
};
export declare type EmergencyCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyCreateFormOverridesProps = {
    EmergencyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmergencyCreateFormProps = React.PropsWithChildren<{
    overrides?: EmergencyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmergencyCreateFormInputValues) => EmergencyCreateFormInputValues;
    onSuccess?: (fields: EmergencyCreateFormInputValues) => void;
    onError?: (fields: EmergencyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmergencyCreateFormInputValues) => EmergencyCreateFormInputValues;
    onValidate?: EmergencyCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmergencyCreateForm(props: EmergencyCreateFormProps): React.ReactElement;
