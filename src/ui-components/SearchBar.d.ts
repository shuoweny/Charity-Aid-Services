/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchBarOverridesProps = {
    SearchBar?: PrimitiveOverrideProps<ViewProps>;
    Form?: PrimitiveOverrideProps<ViewProps>;
    "bx:bx-search"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Search..."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SearchBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchBarOverridesProps | undefined | null;
}>;
export default function SearchBar(props: SearchBarProps): React.ReactElement;
