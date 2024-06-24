/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { RequisitionTableProps } from "./RequisitionTable";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequisitionPageOverridesProps = {
    RequisitionPage?: PrimitiveOverrideProps<FlexProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 413"?: PrimitiveOverrideProps<FlexProps>;
    Button38638265?: PrimitiveOverrideProps<ButtonProps>;
    MyIcon38638279?: MyIconProps;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    Button38638299?: PrimitiveOverrideProps<ButtonProps>;
    MyIcon38638300?: MyIconProps;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    Button38638306?: PrimitiveOverrideProps<ButtonProps>;
    MyIcon38638307?: MyIconProps;
    requisitionTable?: RequisitionTableProps;
} & EscapeHatchProps;
export declare type RequisitionPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RequisitionPageOverridesProps | undefined | null;
}>;
export default function RequisitionPage(props: RequisitionPageProps): React.ReactElement;
