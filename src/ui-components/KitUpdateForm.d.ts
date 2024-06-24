/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Kit } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type KitUpdateFormInputValues = {
    name?: string;
    itemIDs?: string[];
    itemQuantities?: number[];
};
export declare type KitUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    itemIDs?: ValidationFunction<string>;
    itemQuantities?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KitUpdateFormOverridesProps = {
    KitUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    itemIDs?: PrimitiveOverrideProps<TextFieldProps>;
    itemQuantities?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KitUpdateFormProps = React.PropsWithChildren<{
    overrides?: KitUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kit?: Kit;
    onSubmit?: (fields: KitUpdateFormInputValues) => KitUpdateFormInputValues;
    onSuccess?: (fields: KitUpdateFormInputValues) => void;
    onError?: (fields: KitUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KitUpdateFormInputValues) => KitUpdateFormInputValues;
    onValidate?: KitUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KitUpdateForm(props: KitUpdateFormProps): React.ReactElement;
