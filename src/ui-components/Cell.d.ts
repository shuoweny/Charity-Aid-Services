/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CellOverridesProps = {
    Cell?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CellProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "Default" | "Header";
} & {
    overrides?: CellOverridesProps | undefined | null;
}>;
export default function Cell(props: CellProps): React.ReactElement;
