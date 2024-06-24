/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Item } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemUpdateFormInputValues = {
    name?: string;
    categoryId?: string;
    size?: string;
    expiry?: string;
    brand?: string;
    amountPerCount?: string;
    mainIngredients?: string[];
    allergens?: string[];
};
export declare type ItemUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    categoryId?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
    expiry?: ValidationFunction<string>;
    brand?: ValidationFunction<string>;
    amountPerCount?: ValidationFunction<string>;
    mainIngredients?: ValidationFunction<string>;
    allergens?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemUpdateFormOverridesProps = {
    ItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    categoryId?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    expiry?: PrimitiveOverrideProps<TextFieldProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    amountPerCount?: PrimitiveOverrideProps<TextFieldProps>;
    mainIngredients?: PrimitiveOverrideProps<TextFieldProps>;
    allergens?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    item?: Item;
    onSubmit?: (fields: ItemUpdateFormInputValues) => ItemUpdateFormInputValues;
    onSuccess?: (fields: ItemUpdateFormInputValues) => void;
    onError?: (fields: ItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemUpdateFormInputValues) => ItemUpdateFormInputValues;
    onValidate?: ItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItemUpdateForm(props: ItemUpdateFormProps): React.ReactElement;
