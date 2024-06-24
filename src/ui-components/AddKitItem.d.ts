/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, SelectFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddKitItemOverridesProps = {
    AddKitItem?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    SelectField39544684?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField39544685?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AddKitItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddKitItemOverridesProps | undefined | null;
}>;
export default function AddKitItem(props: AddKitItemProps): React.ReactElement;
