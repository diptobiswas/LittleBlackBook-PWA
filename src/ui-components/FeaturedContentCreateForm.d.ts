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
export declare type FeaturedContentCreateFormInputValues = {
    Title?: string;
    Description?: string;
    image?: string;
};
export declare type FeaturedContentCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedContentCreateFormOverridesProps = {
    FeaturedContentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturedContentCreateFormProps = React.PropsWithChildren<{
    overrides?: FeaturedContentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeaturedContentCreateFormInputValues) => FeaturedContentCreateFormInputValues;
    onSuccess?: (fields: FeaturedContentCreateFormInputValues) => void;
    onError?: (fields: FeaturedContentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturedContentCreateFormInputValues) => FeaturedContentCreateFormInputValues;
    onValidate?: FeaturedContentCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturedContentCreateForm(props: FeaturedContentCreateFormProps): React.ReactElement;
