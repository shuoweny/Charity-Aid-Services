/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { DonationstableProps } from "./Donationstable";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationsOverridesProps = {
    Donations?: PrimitiveOverrideProps<ViewProps>;
    backg?: PrimitiveOverrideProps<ViewProps>;
    Donations37874592?: PrimitiveOverrideProps<TextProps>;
    "Transaction History"?: PrimitiveOverrideProps<ViewProps>;
    "Card backg"?: PrimitiveOverrideProps<ViewProps>;
    "donations table"?: DonationstableProps;
} & EscapeHatchProps;
export declare type DonationsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DonationsOverridesProps | undefined | null;
}>;
export default function Donations(props: DonationsProps): React.ReactElement;
