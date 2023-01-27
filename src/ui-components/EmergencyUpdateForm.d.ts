/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Emergency } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmergencyUpdateFormInputValues = {
    Name?: string;
    Phone?: string;
};
export declare type EmergencyUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmergencyUpdateFormOverridesProps = {
    EmergencyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmergencyUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmergencyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    emergency?: Emergency;
    onSubmit?: (fields: EmergencyUpdateFormInputValues) => EmergencyUpdateFormInputValues;
    onSuccess?: (fields: EmergencyUpdateFormInputValues) => void;
    onError?: (fields: EmergencyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmergencyUpdateFormInputValues) => EmergencyUpdateFormInputValues;
    onValidate?: EmergencyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmergencyUpdateForm(props: EmergencyUpdateFormProps): React.ReactElement;
