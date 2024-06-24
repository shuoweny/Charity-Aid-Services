/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AddrecipientpageProps } from "./AddrecipientPage";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1004OverridesProps = {
    Frame1004?: PrimitiveOverrideProps<ViewProps>;
    add_recipient_page?: AddrecipientpageProps;
} & EscapeHatchProps;
export declare type Frame1004Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1004OverridesProps | undefined | null;
}>;
export default function Frame1004(props: Frame1004Props): React.ReactElement;
