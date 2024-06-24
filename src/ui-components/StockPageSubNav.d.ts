/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockPageSubNavOverridesProps = {
    StockPageSubNav?: PrimitiveOverrideProps<ViewProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button36783296?: PrimitiveOverrideProps<ButtonProps>;
    Button36783304?: PrimitiveOverrideProps<ButtonProps>;
    Button36783300?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type StockPageSubNavProps = React.PropsWithChildren<Partial<ViewProps> & {
    view?: "Categories" | "Default" | "Items" | "Kits";
} & {
    overrides?: StockPageSubNavOverridesProps | undefined | null;
}>;
export default function StockPageSubNav(props: StockPageSubNavProps): React.ReactElement;
