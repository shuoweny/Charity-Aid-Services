/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonorOptionOverridesProps = {
    DonorOption?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 1011"?: PrimitiveOverrideProps<FlexProps>;
    frame39034862?: PrimitiveOverrideProps<FlexProps>;
    TextField39034880?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39034887?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40304546?: PrimitiveOverrideProps<TextFieldProps>;
    frame39374889?: PrimitiveOverrideProps<FlexProps>;
    TextField39034894?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39374890?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField40305111?: PrimitiveOverrideProps<SelectFieldProps>;
    frame40305789?: PrimitiveOverrideProps<FlexProps>;
    TextField40305790?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField40305792?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField40306228?: PrimitiveOverrideProps<SelectFieldProps>;
    frame39035013?: PrimitiveOverrideProps<FlexProps>;
    Button39035019?: PrimitiveOverrideProps<ButtonProps>;
    Button39035023?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DonorOptionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DonorOptionOverridesProps | undefined | null;
}>;
export default function DonorOption(props: DonorOptionProps): React.ReactElement;
