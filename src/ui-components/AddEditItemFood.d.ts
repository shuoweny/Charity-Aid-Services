/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddEditItemFoodOverridesProps = {
    AddEditItemFood?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41137134422"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    TextField37134427?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider37134430?: PrimitiveOverrideProps<DividerProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    TextField37134432?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37134433?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37134434?: PrimitiveOverrideProps<TextFieldProps>;
    Divider39556091?: PrimitiveOverrideProps<DividerProps>;
    "Frame 41137134435"?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField37134437?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TextAreaField39556022?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Divider39556237?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddEditItemFoodProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddEditItemFoodOverridesProps | undefined | null;
}>;
export default function AddEditItemFood(props: AddEditItemFoodProps): React.ReactElement;
