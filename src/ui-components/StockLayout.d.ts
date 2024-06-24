/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockLayoutOverridesProps = {
    StockLayout?: PrimitiveOverrideProps<ViewProps>;
    "Frame 999"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Button37365439?: PrimitiveOverrideProps<ButtonProps>;
    Button37365437?: PrimitiveOverrideProps<ButtonProps>;
    Button37365438?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type StockLayoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StockLayoutOverridesProps | undefined | null;
}>;
export default function StockLayout(props: StockLayoutProps): React.ReactElement;
