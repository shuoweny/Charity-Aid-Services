/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AdddonorspageProps } from "./Adddonorspage";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1005OverridesProps = {
    Frame1005?: PrimitiveOverrideProps<ViewProps>;
    add_donors_page?: AdddonorspageProps;
} & EscapeHatchProps;
export declare type Frame1005Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1005OverridesProps | undefined | null;
}>;
export default function Frame1005(props: Frame1005Props): React.ReactElement;
