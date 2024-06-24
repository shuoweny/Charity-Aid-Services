/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequisitionCreateFormInputValues = {
    recipientID?: string;
    depotID?: string;
    fulfilled?: boolean;
    kits?: string[];
    kitQuantity?: number[];
    items?: string[];
    itemQuantity?: number[];
    notes?: string;
};
export declare type RequisitionCreateFormValidationValues = {
    recipientID?: ValidationFunction<string>;
    depotID?: ValidationFunction<string>;
    fulfilled?: ValidationFunction<boolean>;
    kits?: ValidationFunction<string>;
    kitQuantity?: ValidationFunction<number>;
    items?: ValidationFunction<string>;
    itemQuantity?: ValidationFunction<number>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequisitionCreateFormOverridesProps = {
    RequisitionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    recipientID?: PrimitiveOverrideProps<TextFieldProps>;
    depotID?: PrimitiveOverrideProps<TextFieldProps>;
    fulfilled?: PrimitiveOverrideProps<SwitchFieldProps>;
    kits?: PrimitiveOverrideProps<TextFieldProps>;
    kitQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    items?: PrimitiveOverrideProps<TextFieldProps>;
    itemQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequisitionCreateFormProps = React.PropsWithChildren<{
    overrides?: RequisitionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequisitionCreateFormInputValues) => RequisitionCreateFormInputValues;
    onSuccess?: (fields: RequisitionCreateFormInputValues) => void;
    onError?: (fields: RequisitionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequisitionCreateFormInputValues) => RequisitionCreateFormInputValues;
    onValidate?: RequisitionCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequisitionCreateForm(props: RequisitionCreateFormProps): React.ReactElement;
