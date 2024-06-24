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
export declare type DepotCreateFormInputValues = {
    name?: string;
};
export declare type DepotCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DepotCreateFormOverridesProps = {
    DepotCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DepotCreateFormProps = React.PropsWithChildren<{
    overrides?: DepotCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DepotCreateFormInputValues) => DepotCreateFormInputValues;
    onSuccess?: (fields: DepotCreateFormInputValues) => void;
    onError?: (fields: DepotCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DepotCreateFormInputValues) => DepotCreateFormInputValues;
    onValidate?: DepotCreateFormValidationValues;
} & React.CSSProperties>;
export default function DepotCreateForm(props: DepotCreateFormProps): React.ReactElement;
