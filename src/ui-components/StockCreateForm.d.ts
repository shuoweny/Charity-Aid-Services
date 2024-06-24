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
export declare type StockCreateFormInputValues = {
    itemID?: string;
    depotID?: string;
    quantity?: number;
};
export declare type StockCreateFormValidationValues = {
    itemID?: ValidationFunction<string>;
    depotID?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockCreateFormOverridesProps = {
    StockCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    itemID?: PrimitiveOverrideProps<TextFieldProps>;
    depotID?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockCreateFormProps = React.PropsWithChildren<{
    overrides?: StockCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StockCreateFormInputValues) => StockCreateFormInputValues;
    onSuccess?: (fields: StockCreateFormInputValues) => void;
    onError?: (fields: StockCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockCreateFormInputValues) => StockCreateFormInputValues;
    onValidate?: StockCreateFormValidationValues;
} & React.CSSProperties>;
export default function StockCreateForm(props: StockCreateFormProps): React.ReactElement;
