/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CellProps } from "./Cell";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RowOverridesProps = {
    Row?: PrimitiveOverrideProps<FlexProps>;
    Cell36923264?: CellProps;
    Cell36923267?: CellProps;
} & EscapeHatchProps;
export declare type RowProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RowOverridesProps | undefined | null;
}>;
export default function Row(props: RowProps): React.ReactElement;
