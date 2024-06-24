/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Donation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DonationUpdateFormInputValues = {
    donorID?: string;
    itemID?: string;
    quantity?: number;
};
export declare type DonationUpdateFormValidationValues = {
    donorID?: ValidationFunction<string>;
    itemID?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationUpdateFormOverridesProps = {
    DonationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    donorID?: PrimitiveOverrideProps<TextFieldProps>;
    itemID?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DonationUpdateFormProps = React.PropsWithChildren<{
    overrides?: DonationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    donation?: Donation;
    onSubmit?: (fields: DonationUpdateFormInputValues) => DonationUpdateFormInputValues;
    onSuccess?: (fields: DonationUpdateFormInputValues) => void;
    onError?: (fields: DonationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonationUpdateFormInputValues) => DonationUpdateFormInputValues;
    onValidate?: DonationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DonationUpdateForm(props: DonationUpdateFormProps): React.ReactElement;
