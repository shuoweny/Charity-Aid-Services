/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StockPageSubNavProps } from "./StockPageSubNav";
import { CategoryOneProps } from "./CategoryOne";
import { StockHeaderBarCategoriesProps } from "./StockHeaderBarCategories";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockCategoryPageOverridesProps = {
    StockCategoryPage?: PrimitiveOverrideProps<ViewProps>;
    StockPageSubNav?: StockPageSubNavProps;
    CategoryOne37365285?: CategoryOneProps;
    CategoryOne37365286?: CategoryOneProps;
    StockHeaderBarCategories?: StockHeaderBarCategoriesProps;
} & EscapeHatchProps;
export declare type StockCategoryPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StockCategoryPageOverridesProps | undefined | null;
}>;
export default function StockCategoryPage(props: StockCategoryPageProps): React.ReactElement;
