/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Depot } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DepotUpdateFormInputValues = {
    name?: string;
};
export declare type DepotUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DepotUpdateFormOverridesProps = {
    DepotUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DepotUpdateFormProps = React.PropsWithChildren<{
    overrides?: DepotUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    depot?: Depot;
    onSubmit?: (fields: DepotUpdateFormInputValues) => DepotUpdateFormInputValues;
    onSuccess?: (fields: DepotUpdateFormInputValues) => void;
    onError?: (fields: DepotUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DepotUpdateFormInputValues) => DepotUpdateFormInputValues;
    onValidate?: DepotUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DepotUpdateForm(props: DepotUpdateFormProps): React.ReactElement;
