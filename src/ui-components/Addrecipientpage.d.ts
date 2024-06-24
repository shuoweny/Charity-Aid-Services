/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { AddChildProps } from "./AddChild";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddRecipientPageOverridesProps = {
    AddRecipientPage?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 1011"?: PrimitiveOverrideProps<FlexProps>;
    frame39034862?: PrimitiveOverrideProps<FlexProps>;
    TextField39034880?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39034887?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39034894?: PrimitiveOverrideProps<TextFieldProps>;
    frame39034863?: PrimitiveOverrideProps<FlexProps>;
    SelectField39035206?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField39035221?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField39034947?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39034961?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    Button39034974?: PrimitiveOverrideProps<ButtonProps>;
    frame39034878?: PrimitiveOverrideProps<FlexProps>;
    SelectField39035239?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField39034994?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39035001?: PrimitiveOverrideProps<TextFieldProps>;
    frame39034879?: PrimitiveOverrideProps<FlexProps>;
    AddChild?: AddChildProps;
    frame39035013?: PrimitiveOverrideProps<FlexProps>;
    Button39035019?: PrimitiveOverrideProps<ButtonProps>;
    Button39035023?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddRecipientPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddRecipientPageOverridesProps | undefined | null;
}>;
export default function AddRecipientPage(props: AddRecipientPageProps): React.ReactElement;
