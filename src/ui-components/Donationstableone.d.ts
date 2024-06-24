/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationstableoneOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    "1243434"?: PrimitiveOverrideProps<TextProps>;
    Donationstableone?: PrimitiveOverrideProps<ViewProps>;
    Footwear?: PrimitiveOverrideProps<TextProps>;
    shoes?: PrimitiveOverrideProps<TextProps>;
    "James S"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type DonationstableoneProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DonationstableoneOverridesProps | undefined | null;
}>;
export default function Donationstableone(props: DonationstableoneProps): React.ReactElement;
