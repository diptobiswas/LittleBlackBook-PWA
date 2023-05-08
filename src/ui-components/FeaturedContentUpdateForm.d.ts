/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeaturedContent } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeaturedContentUpdateFormInputValues = {
    Title?: string;
    Description?: string;
    image?: string;
};
export declare type FeaturedContentUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedContentUpdateFormOverridesProps = {
    FeaturedContentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturedContentUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeaturedContentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    featuredContent?: FeaturedContent;
    onSubmit?: (fields: FeaturedContentUpdateFormInputValues) => FeaturedContentUpdateFormInputValues;
    onSuccess?: (fields: FeaturedContentUpdateFormInputValues) => void;
    onError?: (fields: FeaturedContentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturedContentUpdateFormInputValues) => FeaturedContentUpdateFormInputValues;
    onValidate?: FeaturedContentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturedContentUpdateForm(props: FeaturedContentUpdateFormProps): React.ReactElement;
