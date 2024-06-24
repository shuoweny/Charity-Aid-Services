/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockHeaderBarItemsOverridesProps = {
    StockHeaderBarItems?: PrimitiveOverrideProps<ViewProps>;
    "Frame 99937854738"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Category?: PrimitiveOverrideProps<TextProps>;
    "Stock available"?: PrimitiveOverrideProps<TextProps>;
    "Frame 99937854741"?: PrimitiveOverrideProps<FlexProps>;
    "Stock at"?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StockHeaderBarItemsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StockHeaderBarItemsOverridesProps | undefined | null;
}>;
export default function StockHeaderBarItems(props: StockHeaderBarItemsProps): React.ReactElement;
