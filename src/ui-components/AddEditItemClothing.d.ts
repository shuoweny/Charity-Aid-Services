/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddEditItemClothingOverridesProps = {
    AddEditItemClothing?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    TextField39555451?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37135286?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddEditItemClothingProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddEditItemClothingOverridesProps | undefined | null;
}>;
export default function AddEditItemClothing(props: AddEditItemClothingProps): React.ReactElement;
