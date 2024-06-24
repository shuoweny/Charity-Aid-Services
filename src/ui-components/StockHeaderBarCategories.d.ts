/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockHeaderBarCategoriesOverridesProps = {
    StockHeaderBarCategories?: PrimitiveOverrideProps<ViewProps>;
    "Frame 99937854610"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Status present"?: PrimitiveOverrideProps<TextProps>;
    "Frame 99937854613"?: PrimitiveOverrideProps<FlexProps>;
    "Stock at"?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StockHeaderBarCategoriesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StockHeaderBarCategoriesOverridesProps | undefined | null;
}>;
export default function StockHeaderBarCategories(props: StockHeaderBarCategoriesProps): React.ReactElement;
