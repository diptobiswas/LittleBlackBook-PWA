/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Events } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventsUpdateFormInputValues = {
    Name?: string;
    Address?: string;
    Day?: string;
    Month?: string;
};
export declare type EventsUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Day?: ValidationFunction<string>;
    Month?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventsUpdateFormOverridesProps = {
    EventsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Day?: PrimitiveOverrideProps<TextFieldProps>;
    Month?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    events?: Events;
    onSubmit?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onSuccess?: (fields: EventsUpdateFormInputValues) => void;
    onError?: (fields: EventsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onValidate?: EventsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventsUpdateForm(props: EventsUpdateFormProps): React.ReactElement;
