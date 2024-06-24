/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, SearchFieldProps, StepperFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdddonationnewOverridesProps = {
    Adddonationnew?: PrimitiveOverrideProps<ViewProps>;
    background?: PrimitiveOverrideProps<IconProps>;
    SearchField39584461?: PrimitiveOverrideProps<SearchFieldProps>;
    SearchField39584473?: PrimitiveOverrideProps<SearchFieldProps>;
    Cancel?: PrimitiveOverrideProps<IconProps>;
    "Add donation"?: PrimitiveOverrideProps<TextProps>;
    button?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1192"?: PrimitiveOverrideProps<ViewProps>;
    Save?: PrimitiveOverrideProps<TextProps>;
    StepperField?: PrimitiveOverrideProps<StepperFieldProps>;
} & EscapeHatchProps;
export declare type AdddonationnewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AdddonationnewOverridesProps | undefined | null;
}>;
export default function Adddonationnew(props: AdddonationnewProps): React.ReactElement;
