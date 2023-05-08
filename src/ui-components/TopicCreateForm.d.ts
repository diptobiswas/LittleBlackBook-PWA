/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TopicCreateFormInputValues = {
    Name?: string;
    Icon?: string;
    Colour?: string;
};
export declare type TopicCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Icon?: ValidationFunction<string>;
    Colour?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicCreateFormOverridesProps = {
    TopicCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Icon?: PrimitiveOverrideProps<TextFieldProps>;
    Colour?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TopicCreateFormProps = React.PropsWithChildren<{
    overrides?: TopicCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TopicCreateFormInputValues) => TopicCreateFormInputValues;
    onSuccess?: (fields: TopicCreateFormInputValues) => void;
    onError?: (fields: TopicCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TopicCreateFormInputValues) => TopicCreateFormInputValues;
    onValidate?: TopicCreateFormValidationValues;
} & React.CSSProperties>;
export default function TopicCreateForm(props: TopicCreateFormProps): React.ReactElement;
