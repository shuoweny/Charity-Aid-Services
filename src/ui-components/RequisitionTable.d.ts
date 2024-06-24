/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequisitionTableOverridesProps = {
    RequisitionTable?: PrimitiveOverrideProps<ViewProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    ID?: PrimitiveOverrideProps<TextProps>;
    "John White38659810"?: PrimitiveOverrideProps<TextProps>;
    "John White38659815"?: PrimitiveOverrideProps<TextProps>;
    RequisitionLine386510482?: PrimitiveOverrideProps<FlexProps>;
    RequisitionLine38764149?: PrimitiveOverrideProps<FlexProps>;
    RequisitionLine38764174?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type RequisitionTableProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RequisitionTableOverridesProps | undefined | null;
}>;
export default function RequisitionTable(props: RequisitionTableProps): React.ReactElement;
