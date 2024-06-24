/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DonationstableheaderProps } from "./Donationstableheader";
import { DonationstableoneProps } from "./Donationstableone";
import { ButtonProps, SearchFieldProps, SelectFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationstableOverridesProps = {
    Donationstable?: PrimitiveOverrideProps<ViewProps>;
    "donations table header"?: DonationstableheaderProps;
    "donations table one39064663"?: DonationstableoneProps;
    "donations table one39064670"?: DonationstableoneProps;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DonationstableProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DonationstableOverridesProps | undefined | null;
}>;
export default function Donationstable(props: DonationstableProps): React.ReactElement;
