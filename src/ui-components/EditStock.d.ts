/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditStockOverridesProps = {
    EditStock?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EditStockProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EditStockOverridesProps | undefined | null;
}>;
export default function EditStock(props: EditStockProps): React.ReactElement;
