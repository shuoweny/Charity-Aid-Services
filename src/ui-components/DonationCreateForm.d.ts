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
export declare type DonationCreateFormInputValues = {
    donorID?: string;
    itemID?: string;
    quantity?: number;
};
export declare type DonationCreateFormValidationValues = {
    donorID?: ValidationFunction<string>;
    itemID?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationCreateFormOverridesProps = {
    DonationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    donorID?: PrimitiveOverrideProps<TextFieldProps>;
    itemID?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DonationCreateFormProps = React.PropsWithChildren<{
    overrides?: DonationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DonationCreateFormInputValues) => DonationCreateFormInputValues;
    onSuccess?: (fields: DonationCreateFormInputValues) => void;
    onError?: (fields: DonationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonationCreateFormInputValues) => DonationCreateFormInputValues;
    onValidate?: DonationCreateFormValidationValues;
} & React.CSSProperties>;
export default function DonationCreateForm(props: DonationCreateFormProps): React.ReactElement;
