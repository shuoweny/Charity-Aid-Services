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
export declare type KitCreateFormInputValues = {
    name?: string;
    itemIDs?: string[];
    itemQuantities?: number[];
};
export declare type KitCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    itemIDs?: ValidationFunction<string>;
    itemQuantities?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KitCreateFormOverridesProps = {
    KitCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    itemIDs?: PrimitiveOverrideProps<TextFieldProps>;
    itemQuantities?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KitCreateFormProps = React.PropsWithChildren<{
    overrides?: KitCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KitCreateFormInputValues) => KitCreateFormInputValues;
    onSuccess?: (fields: KitCreateFormInputValues) => void;
    onError?: (fields: KitCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KitCreateFormInputValues) => KitCreateFormInputValues;
    onValidate?: KitCreateFormValidationValues;
} & React.CSSProperties>;
export default function KitCreateForm(props: KitCreateFormProps): React.ReactElement;
