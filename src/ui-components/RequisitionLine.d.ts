/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequisitionLineOverridesProps = {
    "1000000"?: PrimitiveOverrideProps<TextProps>;
    RequisitionLine?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "John White386510349"?: PrimitiveOverrideProps<TextProps>;
    "John White386510350"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RequisitionLineProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RequisitionLineOverridesProps | undefined | null;
}>;
export default function RequisitionLine(props: RequisitionLineProps): React.ReactElement;
