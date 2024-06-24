/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StockPageSubNavProps } from "./StockPageSubNav";
import { ItemOneProps } from "./ItemOne";
import { StockHeaderBarItemsProps } from "./StockHeaderBarItems";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockItemPageOverridesProps = {
    StockItemPage?: PrimitiveOverrideProps<ViewProps>;
    StockPageSubNav?: StockPageSubNavProps;
    ItemOne36783640?: ItemOneProps;
    ItemOne36783647?: ItemOneProps;
    StockHeaderBarItems?: StockHeaderBarItemsProps;
} & EscapeHatchProps;
export declare type StockItemPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StockItemPageOverridesProps | undefined | null;
}>;
export default function StockItemPage(props: StockItemPageProps): React.ReactElement;
