/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationstableheaderOverridesProps = {
    Donationstableheader?: PrimitiveOverrideProps<ViewProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    ID?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Category?: PrimitiveOverrideProps<TextProps>;
    Quantity?: PrimitiveOverrideProps<TextProps>;
    Donor?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DonationstableheaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DonationstableheaderOverridesProps | undefined | null;
}>;
export default function Donationstableheader(props: DonationstableheaderProps): React.ReactElement;
