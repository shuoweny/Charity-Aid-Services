/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { AddKitItemProps } from "./AddKitItem";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddEditKitOverridesProps = {
    AddEditKit?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41137003935"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Info37003939?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    AddKitItem?: AddKitItemProps;
    Divider37133633?: PrimitiveOverrideProps<DividerProps>;
    "Frame 41137133634"?: PrimitiveOverrideProps<FlexProps>;
    Info37133635?: PrimitiveOverrideProps<TextProps>;
    Button37133636?: PrimitiveOverrideProps<ButtonProps>;
    Divider37044015?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Button37003947?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddEditKitProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddEditKitOverridesProps | undefined | null;
}>;
export default function AddEditKit(props: AddEditKitProps): React.ReactElement;
