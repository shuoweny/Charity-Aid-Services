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
export declare type CategoryOneOverridesProps = {
    CategoryOne?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "Frame 999"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "(Low / Medium / High / Excess)"?: PrimitiveOverrideProps<TextProps>;
    "\u2014"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CategoryOneProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CategoryOneOverridesProps | undefined | null;
}>;
export default function CategoryOne(props: CategoryOneProps): React.ReactElement;
