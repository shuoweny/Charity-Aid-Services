/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StockLayoutProps } from "./StockLayout";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { StockItemPageProps } from "./StockItemPage";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockPageOverridesProps = {
    StockPage?: PrimitiveOverrideProps<ViewProps>;
    StockLayout?: StockLayoutProps;
    "Admin access"?: PrimitiveOverrideProps<TextProps>;
    "Volunteer Admin"?: PrimitiveOverrideProps<TextProps>;
    StockItemPage?: StockItemPageProps;
} & EscapeHatchProps;
export declare type StockPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StockPageOverridesProps | undefined | null;
}>;
export default function StockPage(props: StockPageProps): React.ReactElement;
