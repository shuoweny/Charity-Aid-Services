/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemOneOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    ItemOne?: PrimitiveOverrideProps<ViewProps>;
    "Frame 999"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Category?: PrimitiveOverrideProps<TextProps>;
    "Frame 1000"?: PrimitiveOverrideProps<FlexProps>;
    "Group 8"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39835225?: MyIconProps;
    Button39835226?: PrimitiveOverrideProps<ButtonProps>;
    "\u2014"?: PrimitiveOverrideProps<TextProps>;
    MyIcon36784099?: MyIconProps;
    Button38344071?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ItemOneProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ItemOneOverridesProps | undefined | null;
}>;
export default function ItemOne(props: ItemOneProps): React.ReactElement;
