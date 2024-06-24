/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KitOneOverridesProps = {
    KitOne?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "Frame 999"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "[Calculated ##]"?: PrimitiveOverrideProps<TextProps>;
    "\u2014"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type KitOneProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: KitOneOverridesProps | undefined | null;
}>;
export default function KitOne(props: KitOneProps): React.ReactElement;
