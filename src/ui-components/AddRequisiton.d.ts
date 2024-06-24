/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddRequisitonOverridesProps = {
    AddRequisiton?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Info39035397?: PrimitiveOverrideProps<TextProps>;
    "Group 3039035398"?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    ID?: PrimitiveOverrideProps<TextFieldProps>;
    "Storage information"?: PrimitiveOverrideProps<SelectFieldProps>;
    Depot?: PrimitiveOverrideProps<FlexProps>;
    label39035408?: PrimitiveOverrideProps<TextProps>;
    InputGroup40214559?: PrimitiveOverrideProps<FlexProps>;
    Input40214560?: PrimitiveOverrideProps<FlexProps>;
    placeholder40214561?: PrimitiveOverrideProps<TextProps>;
    "Frame 407"?: PrimitiveOverrideProps<FlexProps>;
    Info39035434?: PrimitiveOverrideProps<TextProps>;
    "Group 3039035435"?: PrimitiveOverrideProps<FlexProps>;
    KITS?: PrimitiveOverrideProps<TextFieldProps>;
    items?: PrimitiveOverrideProps<SelectFieldProps>;
    notes?: PrimitiveOverrideProps<FlexProps>;
    label39035445?: PrimitiveOverrideProps<TextProps>;
    InputGroup40214567?: PrimitiveOverrideProps<FlexProps>;
    Input40214568?: PrimitiveOverrideProps<FlexProps>;
    placeholder40214569?: PrimitiveOverrideProps<TextProps>;
    "Frame 408"?: PrimitiveOverrideProps<FlexProps>;
    Button40184547?: PrimitiveOverrideProps<ButtonProps>;
    Button40214571?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddRequisitonProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddRequisitonOverridesProps | undefined | null;
}>;
export default function AddRequisiton(props: AddRequisitonProps): React.ReactElement;
