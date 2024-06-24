/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DonorspageProps } from "./Donorspage";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1003OverridesProps = {
    Frame1003?: PrimitiveOverrideProps<ViewProps>;
    donors_page?: DonorspageProps;
} & EscapeHatchProps;
export declare type Frame1003Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1003OverridesProps | undefined | null;
}>;
export default function Frame1003(props: Frame1003Props): React.ReactElement;
