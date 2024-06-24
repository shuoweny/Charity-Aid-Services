/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, RadioProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddEditCategoryOverridesProps = {
    AddEditCategory?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41137003839"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Heading37003841?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    TextField39554522?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39554736?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<FlexProps>;
    Radio39554740?: PrimitiveOverrideProps<RadioProps>;
    Radio39554741?: PrimitiveOverrideProps<RadioProps>;
    Radio39554742?: PrimitiveOverrideProps<RadioProps>;
    Divider37343759?: PrimitiveOverrideProps<DividerProps>;
    Heading37343826?: PrimitiveOverrideProps<HeadingProps>;
    "Rectangle 1167"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    Low?: PrimitiveOverrideProps<TextProps>;
    "\u25B237344069"?: PrimitiveOverrideProps<TextProps>;
    Medium?: PrimitiveOverrideProps<TextProps>;
    "\u25B237344075"?: PrimitiveOverrideProps<TextProps>;
    High?: PrimitiveOverrideProps<TextProps>;
    "\u25B237344088"?: PrimitiveOverrideProps<TextProps>;
    Excess?: PrimitiveOverrideProps<TextProps>;
    "Frame 41137344011"?: PrimitiveOverrideProps<FlexProps>;
    TextField37344254?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37344355?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37344376?: PrimitiveOverrideProps<TextFieldProps>;
    Divider39554971?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddEditCategoryProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddEditCategoryOverridesProps | undefined | null;
}>;
export default function AddEditCategory(props: AddEditCategoryProps): React.ReactElement;
