/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StockPageSubNavProps } from "./StockPageSubNav";
import { StockHeaderBarKitsProps } from "./StockHeaderBarKits";
import { KitOneProps } from "./KitOne";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockKitPageOverridesProps = {
    StockKitPage?: PrimitiveOverrideProps<ViewProps>;
    StockPageSubNav?: StockPageSubNavProps;
    StockHeaderBarKits?: StockHeaderBarKitsProps;
    KitOne?: KitOneProps;
    "Frame 1001"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type StockKitPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StockKitPageOverridesProps | undefined | null;
}>;
export default function StockKitPage(props: StockKitPageProps): React.ReactElement;
