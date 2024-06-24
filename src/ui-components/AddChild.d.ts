/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddChildOverridesProps = {
    AddChild?: PrimitiveOverrideProps<FlexProps>;
    TextField39034805?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39034812?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddChildProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddChildOverridesProps | undefined | null;
}>;
export default function AddChild(props: AddChildProps): React.ReactElement;
