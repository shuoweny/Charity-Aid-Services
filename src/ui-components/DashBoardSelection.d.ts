/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashBoardSelectionOverridesProps = {
    DashBoardSelection?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle Copy"?: PrimitiveOverrideProps<ViewProps>;
    "Group 22"?: PrimitiveOverrideProps<ViewProps>;
    Shape?: PrimitiveOverrideProps<IconProps>;
    Path38814290?: PrimitiveOverrideProps<IconProps>;
    Path38814291?: PrimitiveOverrideProps<IconProps>;
    Path38814292?: PrimitiveOverrideProps<IconProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "Oval Copy"?: PrimitiveOverrideProps<IconProps>;
    Month?: PrimitiveOverrideProps<TextProps>;
    "Arrow Copy"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DashBoardSelectionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DashBoardSelectionOverridesProps | undefined | null;
}>;
export default function DashBoardSelection(props: DashBoardSelectionProps): React.ReactElement;
